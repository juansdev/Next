"use client";

import {useAppDispatch, useAppSelector} from "@/store";
import {addOne, setStateCounter, subtractOne} from "@/store/slices/counter/counterSlice";
import {useEffect} from "react";
import {ICounterResponse} from "@/app/api/counter/interfaces";

export interface ICartCounterProps {
  value?: number;
}

const getApiCounter = async (): Promise<ICounterResponse> => {
  return await fetch(`/api/counter`, {
    next: {
      revalidate: 60 * 60 * 24 * 30 * 6
    }
  }).then(res => res.json());
}
export const CartCounter = () => {
  const dispatch = useAppDispatch();
  const countRedux = useAppSelector(state => state.counter.count) as number;

  useEffect(() => {
    if (!countRedux)
      getApiCounter().then(({count}) => dispatch(setStateCounter(count)));
  }, [countRedux, dispatch]);

  return (<>
    <span className={"text-9xl"}>{countRedux}</span>

    <div className={"flex"}>
      <button onClick={() => dispatch(addOne())}
              className={"flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"}>
        +1
      </button>
      <button onClick={() => dispatch(subtractOne())}
              className={"flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"}>
        -1
      </button>
    </div>
  </>);
}