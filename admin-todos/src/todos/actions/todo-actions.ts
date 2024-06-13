"use server";

import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export const toggleTodo = async (id: string, complete: boolean) => {
  const todo = await prisma.todo.findFirst({where: {id}})
  if (!todo) throw `Todo con id ${id} no encontrado`;
  revalidatePath("/dashboard/server-todos");
  return prisma.todo.update({
    where: {id},
    data: {complete}
  });
}

export const addTodo = async (description: string, userId: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        description,
        userId
      }
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (e) {
    return {
      message: "Error creando todo"
    }
  }
}

export const deleteCompleted = async (): Promise<void> => {
  try {
    await prisma.todo.deleteMany({where: {complete: true}});
    revalidatePath("/dashboard/server-todos");
  } catch (e) {
    return;
  }
}