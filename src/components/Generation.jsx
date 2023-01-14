import "../styles/pokemoncontent.css";
import pokeball from "../../src/assets/pokeball.png";
import { useState } from "react";

const Generation = ({ data }) => {
  return (
    <div className="outer-container">
      <div className="pokemoncontainer">
        {data.pokemon_species.map((el) => (
          <Pokemon el={el} key={el.url} />
        ))}
      </div>
    </div>
  );
};

const Pokemon = ({ el }) => {
  const [isHovering, setIsHovering] = useState(false);
  const urlSplit = el.url.split("/");
  const pokemonId = urlSplit[urlSplit.length - 2];
  const pokemonImg = isHovering
    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemonId +
      ".png"
    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" +
      pokemonId +
      ".png";

  return (
    <div
      className="pokemon"
      key={el.name}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p>{el.name}</p>
      <img className="pokeball" src={pokemonImg}></img>
    </div>
  );
};

export default Generation;
