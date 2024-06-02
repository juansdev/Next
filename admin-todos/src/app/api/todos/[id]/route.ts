import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";
import {Todo} from "@prisma/client";

interface ISegments {
  params: {
    id: string
  }
}

const getTodo = async (id: string): Promise<Todo | null> => await prisma.todo.findFirst({where: {id}});

export async function GET(request: Request, {params}: ISegments) {
  const {id} = params;
  const todo = await getTodo(id);
  if (!todo) return NextResponse.json({message: `Todo with ID "${id}" not exists.`}, {status: 404});

  return NextResponse.json(todo);
}

const putScheme = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional()
});

export async function PUT(request: Request, {params}: ISegments) {
  const {id} = params;
  const todo = await getTodo(id);
  if (!todo) return NextResponse.json({message: `Todo with ID "${id}" not exists.`}, {status: 404})
  try {
    const {description, complete} = await putScheme.validate(await request.json());
    const updatedTodo = await prisma.todo.update({
      where: {id},
      data: {
        description,
        complete
      }
    });
    return NextResponse.json(updatedTodo);
  } catch (e) {
    return NextResponse.json(e, {status: 400})
  }
}