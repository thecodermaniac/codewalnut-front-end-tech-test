import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemon = async (id) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  console.log(data);

  return data;
};

export const usePokemonData = (id) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
