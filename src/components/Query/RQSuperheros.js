import React from "react";
import useHeroesDataQuery from "../../hooks/useHeroesDataQuery";
import { Link } from "react-router-dom";

const RQSuperheros = () => {
  const onSuccess = (data) => {
    console.log("Perform side Effect after encountering success", data);
  };
  const onError = (data) => {
    console.log("Perform side Effect After Encountering Error", data);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useHeroesDataQuery(onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  console.log(data);
  return (
    <div>
      <h1>RqSuperHeros</h1>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default RQSuperheros;
