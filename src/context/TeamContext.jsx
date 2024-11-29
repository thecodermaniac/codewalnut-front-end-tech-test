import React, { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]); // Each team is an array of Pokémon objects

  const createTeam = (teamName) => {
    setTeams((prevTeams) => [...prevTeams, { name: teamName, members: [] }]);
  };

  const deleteTeam = (teamName) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.name !== teamName));
  };

  const addPokemonToTeam = (teamName, pokemon) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.name === teamName && team.members.length < 6
          ? { ...team, members: [...team.members, pokemon] }
          : team,
      ),
    );
  };

  const removePokemonFromTeam = (teamName, pokemonId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.name === teamName
          ? { ...team, members: team.members.filter((p) => p.id !== pokemonId) }
          : team,
      ),
    );
  };

  const reorderPokemonInTeam = (teamName, fromIndex, toIndex) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.name === teamName) {
          const updatedMembers = [...team.members];
          const [movedPokemon] = updatedMembers.splice(fromIndex, 1);
          updatedMembers.splice(toIndex, 0, movedPokemon);
          return { ...team, members: updatedMembers };
        }
        return team;
      }),
    );
  };

  return (
    <TeamContext.Provider
      value={{
        teams,
        createTeam,
        deleteTeam,
        addPokemonToTeam,
        removePokemonFromTeam,
        reorderPokemonInTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
