import { getPokemonList } from "@/lib/api";
import PokemonList from "../../components/PokemonList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// 2: Starte den API-Aufruf und übergib die Promise an PokemonList.
// 4: Umschließe die Komponente mit Suspense und einem Loading-Fallback.

export default function Page() {
  const promise = getPokemonList();
  return (
    <>
      <h1>150 Pokémon</h1>
      <Suspense fallback={<Loading message="Loading Pokemon" />}>
        <PokemonList promise={promise} />
      </Suspense>
    </>
  );
}
