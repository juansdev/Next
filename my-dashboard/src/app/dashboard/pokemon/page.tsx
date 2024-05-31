import {IPokemonResponse, ISimplePokemon, PokemonGrid} from "@/pokemon";

const getPokemon = async(limit = 20, offset= 0): Promise<ISimplePokemon[]> => {
  const data: IPokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());
  return data.results.map(result=>({
    id: result.url.split("/").at(-2)!,
    name: result.name
  }));
}

export default async function PokemonPage(){
  const listPokemon = await getPokemon(151);
  return (<div className={"flex flex-col"}>
    <span className={"text-5xl my-2"}>
      List Pokemon <small>Static</small>
    </span>
    <PokemonGrid listPokemon={listPokemon}></PokemonGrid>
  </div>);
}