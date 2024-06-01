import Link from "next/link";
import React from "react";
import {NotFoundTemplate} from "@/pokemon/components/NotFoundTemplate";

export const PokemonNotFound = () => {
  return (
    <NotFoundTemplate
      title={"Pokemon Not Found"}
      linkToRedirect={<Link href={"/dashboard/pokemon"}>See List of Pokemon</Link>}>
    </NotFoundTemplate>
  );
}