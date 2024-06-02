"use client";

import Link from "next/link";
import {ISimplePokemon} from "@/pokemon";
import Image from "next/image";
import {IoHeart, IoHeartOutline} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "@/store";
import {toggleFavorite} from "@/store/slices/pokemon/pokemonSlice";

export interface IPokemonCardProps {
  pokemon: ISimplePokemon;
}

export const PokemonCard = ({pokemon}: IPokemonCardProps) => {
  const {id, name} = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemon.favorites[id]) as boolean;
  const dispatch = useAppDispatch();
  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  }
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image width={100}
                 height={100}
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                 alt={`Image of the pokemon named ${name}`}
                 priority={false}
                 style={{"width": "auto", "height": "100px"}}
          >
          </Image>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/name/${name}`}
                  className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More information..
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" onClick={onToggleFavorite}>
            <div className="text-red-600">
              {isFavorite ? <IoHeart></IoHeart> : <IoHeartOutline></IoHeartOutline>}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "It's favorite" : "It's not favorite"}
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}