import { getPokemon } from "@/lib/api";
import PokemonDetail from "../../../components/PokemonDetail";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// 2: Starte den API-Aufruf und übergib die Promise an PokemonDetail.
// 4: Umschließe die Komponente mit Suspense und einem Loading-Fallback.
// Die URL-Parameter bekommst du als params: Promise<{ id: string }>.
// Mache die Page async und lies die ID mit: const { id } = await params;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const promise = getPokemon(id);
  return (
    <>
      <h1>Ein Pokémon</h1>
      <Suspense fallback={<Loading message="Loading Pokemon" />}>
        <PokemonDetail promise={promise} />
      </Suspense>
    </>
  );
}
