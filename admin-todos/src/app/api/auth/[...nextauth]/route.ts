import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {Adapter} from "next-auth/adapters";
import prisma from "@/lib/prisma";
import {signInEmailPassword} from "@/auth/actions/auth-actions";
import CredentialsProvider from "next-auth/providers/credentials";

export interface ICredentialUser {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email", placeholder: "email@example.com"},
        password: {label: "Password", type: "password", placeholder: "****"}
      },
      async authorize(credentials) {
        const user = await signInEmailPassword({
          email: credentials!.email,
          password: credentials!.password
        });
        if (user) return user;
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({token, user, account, profile}) {
      const dbUser = await prisma.user.findUnique({where: {email: token.email ?? "No-Email"}});
      if (!dbUser?.isActive)
        throw Error("The user is not active.");
      token.roles = dbUser?.roles ?? ["no-roles"];
      token.id = dbUser?.id ?? "no-uuid";
      return token;
    },
    async session({session, token, user}) {
      if (session && session.user) {
        session.user.roles = token.roles;
        session.user.id = token.id;
      }

      return session;
    }
  }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
