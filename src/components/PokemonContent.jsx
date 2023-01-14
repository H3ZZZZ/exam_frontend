import { useState } from "react";
import "../styles/pokemoncontent.css";
import Pokedex from "./Pokedex";
import facade from "../apiFacade";
import loading from "../../src/assets/pokemon-loading.gif";
import opening from "../../src/assets/pokedex.gif";

const PokemonContent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonData, setPokemonData] = useState();
  const [pokeImg, setPokeImg] = useState("/src/assets/fighting.gif");
  const [isFetching, setIsFething] = useState(false);
  const [firstFetch, setFirstFetch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("søg på :" + searchInput);
    setIsFething(true);
    await fetchAlternateImage(searchInput);
    await fetchPokemonData(searchInput);
    setFirstFetch(false);
    setIsFething(false);
  };

  const fetchAlternateImage = async (pokename) => {
    let fetchUrl = "https://frederikhess.dk/tomcat/CA2/api/dalle/admin";
    const options = facade.makeOptions("POST", true, {
      prompt: pokename,
    });
    setPokeImg(loading);
    let data = await fetch(fetchUrl, options);
    if (data.status != 200) {
      fetchUrl = "https://frederikhess.dk/tomcat/CA2/api/dalle";
      data = await fetch(fetchUrl, options);
    }
    const res = await data.json();
    setPokeImg(res.data[0].url);
    console.log(res);
    setSearchInput("");
  };

  const fetchPokemonData = async (pokemon) => {
    let fetchUrl =
      "https://frederikhess.dk/tomcat/CA2/api/pokemon/" + pokemon.toLowerCase();
    setSearchInput("");
    const data = await fetch(fetchUrl);
    console.log(data);
    const res = await data.json();
    console.log(res);
    setPokemonData(res);
    console.log(pokemonData);
  };

  return (
    <div className="background">
      <form>
        <div>
          <input
            className="input"
            type="text"
            name="name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Indtast navn på pokemon"
          ></input>
          <input
            className="button"
            type="submit"
            value="Søg"
            onClick={handleSubmit}
          />
        </div>
      </form>
      {isFetching && firstFetch && <img src={opening} width="500px" />}
      {pokemonData && <Pokedex pokeImg={pokeImg} pokemonData={pokemonData} />}
    </div>
  );
};

export default PokemonContent;
