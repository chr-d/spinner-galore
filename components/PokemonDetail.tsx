"use client";

import type { Pokemon } from "@/lib/schemas";
import Image from "next/image";
import { use } from "react";

// Platzhalter: Titel und Text werden später direkt in der Post-Detail-Page angezeigt.
// Diese Datei kann danach entfernt werden, sobald kein Import mehr darauf verweist.

export default function PostDetail({ promise }: { promise: Promise<Pokemon> }) {
  const pokemon = use(promise);

  return (
    <>
      <h2>{pokemon.name}</h2>
      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={96}
          height={96}
          loading="eager"
        />
      )}
    </>
  );
}
