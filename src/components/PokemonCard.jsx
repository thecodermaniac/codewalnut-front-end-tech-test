"use client";
import React from "react";

const PokemonCard = ({ pokemon, addToTeam }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32"
      />
      <h3 className="mt-2 text-xl">{pokemon.name.toUpperCase()}</h3>
      <p className="text-gray-500">
        Type: {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <button
        onClick={() => addToTeam(pokemon)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add to Team
      </button>
    </div>
  );
};

export default PokemonCard;
