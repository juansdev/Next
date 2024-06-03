'use client';
import {IoTrashOutline} from "react-icons/io5";
import {FormEvent, useState} from "react";
import {todosApi} from "@/todos/helpers";
import {useRouter} from "next/navigation";

export const NewTodo = () => {

  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!description.trim().length) return;
    await todosApi.createTodo(description);
    router.refresh();
    setDescription("");
  }

  const deleteCompleted = async () => {
    await todosApi.deleteCompletedTodos();
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input type="text" onChange={(e) => setDescription(e.target.value)}
             className="w-6/12 -ml-10 pl-3 pr-3 py-2 text-black rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
             placeholder="¿Qué necesita ser hecho?"/>

      <button type='submit'
              className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Create
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteCompleted()}
        type='button'
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline/>
        Delete
      </button>


    </form>
  )
}