import {Metadata} from "next";

export const metadata: Metadata = {
  title: "About Title",
  description: "About Description",
  keywords: ["About Page", "Juan"]
}

export default function AboutPage(){
  return (
    <main className={"flex flex-col items-center p-24"}>
      <span className={"text-lg"}>Hola Mundo</span>
      <span className={"text-7xl"}>About Page</span>
    </main>
  );
}