"use client";

import type { PokemonList } from "@/lib/schemas";
import Link from "next/link";
import { use } from "react";

// 3: Ergänze 'use client', eine promise-Prop und use(promise).
// Den passenden Typ findest du in ../lib/schemas.ts.

export default function PokemonList({
  promise,
}: {
  promise: Promise<PokemonList>;
}) {
  const pokemons = use(promise);
  return (
    <ul>
      {pokemons.results.map((pokemon, index) => (
        <li key={pokemon.name}>
          <Link href={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
}
