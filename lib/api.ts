"use server";

import {
  PokemonListSchema,
  PokemonSchema,
  PostSchema,
  PostsSchema,
} from "@/lib/schemas";
import { notFound } from "next/navigation";

// 1: Erstelle getPosts(), getPost(id), getPokemonList() und getPokemon(id).
// Jede Funktion: fetch → response.ok prüfen → response.json() → Schema.parse(data).
// Die Schemas findest du in schemas.ts.

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to load posts");
  }
  const data: unknown = await response.json();
  return PostsSchema.parse(data);
};

const getPost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (response.status === 404) notFound();
  if (!response.ok) {
    throw new Error("Failed to load post");
  }
  const data: unknown = await response.json();
  return PostSchema.parse(data);
};

const getPokemonList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  if (!response.ok) {
    throw new Error("Failed to load Pokemons");
  }
  const data: unknown = await response.json();
  return PokemonListSchema.parse(data);
};

const getPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (response.status === 404) notFound();
  if (!response.ok) {
    throw new Error("Failed to load Pokemon");
  }
  const data: unknown = await response.json();
  return PokemonSchema.parse(data);
};

export { getPosts, getPost, getPokemonList, getPokemon };
