import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {authOptions, ICredentialUser} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

export const signInEmailPassword = async ({email, password}: ICredentialUser) => {
  if (!email || !password) return null;
  const user = await prisma.user.findUnique({where: {email}});
  if (!user) return createUser({email, password});
  if (!bcrypt.compareSync(password, user.password ?? "")) return null;
  return user;
}

const createUser = ({email, password}: ICredentialUser) => {
  return prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0]
    }
  });
}

export const getUserSessionServer = async () => await getServerSession(authOptions).then(session => session?.user);