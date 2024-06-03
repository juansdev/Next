"use client";

import {Todo} from "@prisma/client";
import {TodoItem} from "@/todos/components";
import {todosApi} from "@/todos/helpers";
import {useRouter} from "next/navigation";

export interface ITodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({todos}: ITodosGridProps) => {

  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await todosApi.updateTodo(id, complete);
    router.refresh();
    return updatedTodo;
  }

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-3 gap-2 text-black"}>
      {
        todos?.map(todo =>
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}></TodoItem>)
      }
    </div>
  );
}
