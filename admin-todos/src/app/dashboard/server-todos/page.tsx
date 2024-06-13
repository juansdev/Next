import {getUserSessionServer} from "@/auth/actions/auth-actions";
import {Metadata} from "next";
import prisma from "@/lib/prisma";
import {NewTodo, TodosGrid} from "@/todos/components";
import {redirect} from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "List of Todos",
  description: "SEO Title"
}

export default async function serverTodosPage() {
  const user = await getUserSessionServer();
  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: {
      userId: user?.id
    },
    orderBy: {
      description: "asc"
    }
  });

  return (
    <>
      <span className={"text-3xl mb-10"}>Server Actions</span>
      <div className={"w-full px-3 mx-5 mb-5"}>
        <NewTodo></NewTodo>
      </div>
      <TodosGrid todos={todos}></TodosGrid>
    </>
  );
}