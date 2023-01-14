import { useEffect } from "react";
import { useState } from "react";

const PokemonImage = ({ img }) => {
  const [pokeImg, setPokeImg] = useState("/src/assets/fighting.gif");
  useEffect(() => {
    setPokeImg(img);
  }, [img]);

  return <img src={pokeImg} alt="psykokwak" height="170" />;
};

export default PokemonImage;
