const PokemonData = ({ pokemonData }) => {
  return (
    <div id="stats">
      <strong>Name: </strong> {pokemonData.forms[0].name}
      <br />
      <strong>Type:</strong>{" "}
      {pokemonData.types.map((el, index) =>
        index != 1 ? el.type.name + " " : el.type.name
      )}
      <br />
      <strong>Hp:</strong> {pokemonData.stats[0].base_stat}
      <br />
      <strong>Attack:</strong> {pokemonData.stats[1].base_stat}
      <br />
      <strong>Defense:</strong> {pokemonData.stats[2].base_stat}
      <br />
      <strong>Special-Attack:</strong> {pokemonData.stats[3].base_stat}
      <br />
      <strong>Special-Defence:</strong> {pokemonData.stats[4].base_stat}
    </div>
  );
};

export default PokemonData;
