import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "A List of your Pokemon Favorites"
}

export default async function PokemonPage() {
  return (
    <div className={"flex flex-col"}>
      <span className={"text-5xl my-2"}>
        List of your Pokemon Favorites <small className={"text-blue-500"}>Global State</small>
      </span>
    </div>
  );
}