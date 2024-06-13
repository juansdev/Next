import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET(_: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          {description: "Piedra del alma", complete: true},
          {description: "Piedra del poder"},
          {description: "Piedra del tiempo"},
          {description: "Piedra del espacio"},
          {description: "Piedra de la realidad"}
        ]
      }
    }
  });

  return NextResponse.json({message: "Seed Executed"});
}