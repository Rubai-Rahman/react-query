import axios from "axios";
import { useQuery } from "react-query";

const fetcher = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useHeroesDataQuery = (onSuccess, onError) => {
  return useQuery("super-heroes", fetcher, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export default useHeroesDataQuery;
