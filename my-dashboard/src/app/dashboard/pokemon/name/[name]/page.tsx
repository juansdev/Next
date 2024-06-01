import {Metadata} from "next";
import {generateMetadataPokemon, getListPokemon, Pokemon} from "@/pokemon";

interface IProps {
  params: {
    name: string
  }
}

// !Executable in Build Time
export async function generateStaticParams() {
  const listPokemon = await getListPokemon(151);
  const listStaticPokemon = listPokemon.map(pokemon => `${pokemon.name}`);
  return listStaticPokemon.map(name => ({
    name
  }));
}

export async function generateMetadata({params}: IProps): Promise<Metadata> {
  return await generateMetadataPokemon(params.name);
}

export default async function PokemonPage({params}: IProps) {
  return (<Pokemon identifyPokemon={params.name}></Pokemon>);
}