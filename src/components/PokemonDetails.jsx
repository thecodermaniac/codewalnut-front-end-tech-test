"use client";
import React from "react";
import { usePokemonData } from "../hooks/usePokemonData";

const PokemonDetails = ({ nameOrId }) => {
  const { data, isLoading, error } = usePokemonData(nameOrId);

  if (isLoading) return <p>Loading Pokémon data...</p>;
  if (error) return <p>Error fetching Pokémon data.</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col items-center">
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-48 h-48"
        />
        <h2 className="text-2xl mt-4">{data.name.toUpperCase()}</h2>
        <div className="mt-2">
          <p>Type: {data.types.map((t) => t.type.name).join(", ")}</p>
          <p>
            Abilities: {data.abilities.map((a) => a.ability.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Stats</h3>
        <ul className="mt-2">
          {data.stats.map((stat) => (
            <li key={stat.stat.name} className="text-gray-700">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
