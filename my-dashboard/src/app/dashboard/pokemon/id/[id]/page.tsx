import {generateMetadataPokemon, Pokemon} from "@/pokemon";
import {Metadata} from "next";

interface IProps {
  params: {
    id: string
  }
}

// !Executable in Build Time
export async function generateStaticParams() {
  const listStaticPokemon = Array.from({length: 151}).map((_, i) => `${i + 1}`);
  return listStaticPokemon.map(id => ({
    id
  }));
}

export async function generateMetadata({params}: IProps): Promise<Metadata> {
  return await generateMetadataPokemon(params.id);
}

export default async function PokemonPage({params}: IProps) {
  return (<Pokemon identifyPokemon={params.id}></Pokemon>);
}