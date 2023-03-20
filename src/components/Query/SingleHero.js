import React from "react";
import { useParams } from "react-router-dom";
import useSuperHeroData from "../../hooks/useSuperHeroData";

const SingleHero = () => {
  const { heroId } = useParams();
  const { isLoading, isError, data, error } = useSuperHeroData(heroId);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data.data);
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default SingleHero;
