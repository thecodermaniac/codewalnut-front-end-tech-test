/* eslint-disable react/jsx-filename-extension */
"use client";
import React, { useState } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { useTeam } from "@/hooks/useTeam";
import { data } from "autoprefixer";

const Home = () => {
  const { addPokemonToTeam } = useTeam();
  const [search, setSearch] = useState("");
  const {
    data: pokemonList,
    isLoading,
    isSuccess,
    error,
    refetch,
  } = usePokemonData(search);

  console.log(data);

  const handleAddPokemon = (pokemon) => {
    addPokemonToTeam("default-team", pokemon); // Replace with team selection logic if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Pokémon Team Manager
        </h1>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 p-2 border rounded-lg w-full"
        />
        <button
          onClick={() => {
            refetch();
          }}
        >
          Search
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {isLoading && <p>Loading Pokémon...</p>}
          {error && <p>Error fetching Pokémon.</p>}
          {isSuccess && (
            <PokemonCard
              key={pokemonList.name}
              pokemon={pokemonList}
              addToTeam={handleAddPokemon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
