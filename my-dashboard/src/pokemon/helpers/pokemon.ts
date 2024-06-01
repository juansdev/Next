import {IPokemon, IPokemonResponse, ISimplePokemon} from "@/pokemon";
import {notFound} from "next/navigation";
import {Metadata} from "next";


export const getPokemon = async (identifyPokemon: string): Promise<IPokemon> => {
  try {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${identifyPokemon.toLowerCase()}`).then(res => res.json());
  } catch (e) {
    notFound();
  }
}

export const getListPokemon = async (limit = 20, offset = 0, revalidate: number = 60 * 60 * 24 * 30 * 6): Promise<ISimplePokemon[]> => {
  const data: IPokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
    next: {
      revalidate
    }
  }).then(res => res.json());
  return data.results.map(result => ({
    id: result.url.split("/").at(-2)!,
    name: result.name
  }));
}

export async function generateMetadataPokemon(identifyPokemon: string): Promise<Metadata> {
  try {
    const {id, name} = await getPokemon(identifyPokemon);
    return {
      title: `#${id} - ${name}`,
      description: `Page of the pokemon ${name}`
    }
  } catch (error) {
    return {
      title: `Title`,
      description: `Description`
    }
  }
}