"use client";

import {Todo} from "@prisma/client";
import {todoItemStyles} from "@/todos/css";
import {IoCheckboxOutline, IoSquareOutline} from "react-icons/io5";
import {Component} from "react";

export interface ITodoItemProps {
  todo: Todo,
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export class TodoItem extends Component<ITodoItemProps> {
  render() {
    let {todo, toggleTodo} = this.props;
    return (
      <div className={todo.complete ? todoItemStyles.todoDone : todoItemStyles.todoPending}>
        <div className={"flex flex-col sm:flex-row justify-start items-center gap-4"}>
          <div onClick={() => toggleTodo(todo.id, !todo.complete)}
               className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 ${todo.complete ? "bg-blue-100" : "bg-red-100"}`}>
            {
              todo.complete ?
                <IoCheckboxOutline size={30}></IoCheckboxOutline> :
                <IoSquareOutline size={30}></IoSquareOutline>
            }
          </div>
          <div className={"text-center sm:text-left"}>
            {todo.description}
          </div>
        </div>
      </div>
    );
  }
}