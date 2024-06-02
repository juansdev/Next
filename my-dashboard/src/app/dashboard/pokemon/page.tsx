import {getListPokemon, PokemonGrid} from "@/pokemon";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "List of Pokemon",
  description: "A List of Pokemon"
}

export default async function PokemonPage() {
  const listPokemon = await getListPokemon(151);
  return (
    <div className={"flex flex-col"}>
      <span className={"text-5xl my-2"}>
        List Pokemon <small className={"text-blue-500"}>Static</small>
      </span>
      <PokemonGrid listPokemon={listPokemon}></PokemonGrid>
    </div>
  );
}