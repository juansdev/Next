import {Metadata} from "next";
import {PokemonFavorites} from "@/pokemon";

export const metadata: Metadata = {
  title: "Favorites",
  description: "A List of your Pokemon Favorites"
}

export default async function PokemonFavoritesPage() {
  return (
    <div className={"flex flex-col"}>
      <span className={"text-5xl my-2"}>
        List of your Pokemon Favorites <small className={"text-blue-500"}>Global State</small>
        <PokemonFavorites></PokemonFavorites>
      </span>
    </div>
  );
}