import {Metadata} from "next";
import {CartCounter} from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple count"
};

export default async function CounterPage() {
  return (
    <div className={"flex flex-col items-center justify-center w-full h-full"}>
      <span>Products in Car</span>
      <CartCounter></CartCounter>
    </div>
  );
}