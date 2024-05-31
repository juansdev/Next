import {ISimplePokemon} from "@/pokemon";
import {PokemonCard} from "@/pokemon/components/PokemonCard";

export interface IPropsPokemonGrid {
  listPokemon: ISimplePokemon[];
}
export const PokemonGrid = ({listPokemon}: IPropsPokemonGrid) => {
  return (
    <div className={"flex flex-wrap gap-10 item-center justify-center"}>
      {
        listPokemon.map((pokemon, index) =>
          <>
            <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
          </>
        )
      }
    </div>
  );
}