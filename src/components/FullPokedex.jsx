import React from "react";
import { useState } from "react";
import "../styles/pokemoncontent.css";
import Generation from "./Generation";

const FullPokedex = () => {
  const [data, setData] = useState();

  const fetchPokemonData = async (generation) => {
    let url = "https://pokeapi.co/api/v2/generation/" + generation;
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    setData(res);
  };

  return (
    <div className="background">
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(1)}
        className="button"
        type="button"
      >
        Fetch 1. generation
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(2)}
        className="button"
        type="button"
      >
        Fetch 2. generation
      </button>

      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(3)}
        className="button"
        type="button"
      >
        Fetch 3. generation
      </button>

      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(4)}
        className="button"
        type="button"
      >
        Fetch 4. generation
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(5)}
        className="button"
        type="button"
      >
        Fetch 5. generation
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(6)}
        className="button"
        type="button"
      >
        Fetch 6. generation
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(7)}
        className="button"
        type="button"
      >
        Fetch 7. generation
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => fetchPokemonData(8)}
        className="button"
        type="button"
      >
        Fetch 8. generation
      </button>
      <h2>Do you need inspiration for pokemon names?</h2>
      <h4>Press a button to get a list of pokemons</h4>
      {data != null && <Generation data={data} />}
    </div>
  );
};

export default FullPokedex;
