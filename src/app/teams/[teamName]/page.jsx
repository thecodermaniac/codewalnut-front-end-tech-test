"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import DragAndDrop from "@/components/DragAndDrop";
import { useTeam } from "@/hooks/useTeam";
import PokemonCard from "@/components/PokemonCard";

const TeamDetails = () => {
  // const router = useRouter();
  const { teams, removePokemonFromTeam, reorderPokemonInTeam } = useTeam();
  const team = teams.find((team) => team.name === useParams().teamName);
  console.log(useParams().teamName);
  console.log(team);

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
          <p className="text-center text-xl text-gray-700 dark:text-gray-100">
            Team not found.
          </p>
        </div>
      </div>
    );
  }

  const handleRemovePokemon = (pokemonId) => {
    removePokemonFromTeam(team.name, pokemonId);
  };

  const handleReorderPokemon = (fromIndex, toIndex) => {
    reorderPokemonInTeam(team.name, fromIndex, toIndex);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {team.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {team.members.map((pokemon, index) => (
            <div key={pokemon.id} className="relative">
              <PokemonCard pokemon={pokemon} /> {/* its temporary*/}
              {/* <DragAndDrop
                pokemon={pokemon}
                index={index}
                movePokemon={handleReorderPokemon}
              /> */}
              <button
                onClick={() => handleRemovePokemon(pokemon.id)}
                className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-red-500 text-white rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
