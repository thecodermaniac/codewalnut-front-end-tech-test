import { useContext } from "react";
import { TeamContext } from "@/context/TeamContext";

export const useTeam = () => {
  const {
    teams,
    createTeam,
    deleteTeam,
    addPokemonToTeam,
    removePokemonFromTeam,
    reorderPokemonInTeam,
  } = useContext(TeamContext);

  return {
    teams,
    createTeam,
    deleteTeam,
    addPokemonToTeam,
    removePokemonFromTeam,
    reorderPokemonInTeam,
  };
};
