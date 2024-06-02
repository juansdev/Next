"use client";

import {useAppSelector} from "@/store";
import {ISimplePokemon, PokemonGrid} from "@/pokemon";
import {useEffect, useState} from "react";
import {IoHeartOutline} from "react-icons/io5";

export const PokemonFavorites = () => {
  const listPokemonFavorite = useAppSelector(state => Object.values(state.pokemon.favorites)) as ISimplePokemon[];
  const [_, setListPokemon] = useState(listPokemonFavorite);

  useEffect(() => {
    setListPokemon(listPokemonFavorite);
  }, [listPokemonFavorite]);

  if (listPokemonFavorite.length) return (
    <PokemonGrid listPokemon={listPokemonFavorite}></PokemonGrid>
  );
  else return (
    <div className={"flex flex-col h-[50vh] items-center justify-center"}>
      <IoHeartOutline size={100} className={"text-red-500"}></IoHeartOutline>
      <span>There are not favorites</span>
    </div>);
}