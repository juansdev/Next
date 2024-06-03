"use client";

import {Todo} from "@prisma/client";
import {TodoItem} from "@/todos/components";
import {toggleTodo} from "@/todos/actions/todo-actions";

export interface ITodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({todos}: ITodosGridProps) => {

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-3 gap-2 text-black"}>
      {
        todos?.map(todo =>
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}></TodoItem>)
      }
    </div>
  );
}
