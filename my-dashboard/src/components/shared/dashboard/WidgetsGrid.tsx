"use client";

import {SimpleWidget} from "@/components";
import {useAppSelector} from "@/store";
import {IoCartOutline} from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count) as number;
  return (
    <div className={"flex flex-wrap p-2 justify-center items-center"}>
      <SimpleWidget label={"Counter"}
                    title={count.toString()}
                    subTitle={"Products in Car Shop"}
                    icon={<IoCartOutline size={70} className={"text-blue-600"}></IoCartOutline>}
                    href={"/dashboard/counter"}>
      </SimpleWidget>
    </div>
  )
}