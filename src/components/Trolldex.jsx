import { useState } from "react";
import "../styles/pokemoncontent.css";
import funnyimg from "../assets/funny.gif";
import cattyping from "../assets/cattyping.gif";
import facade from "../apiFacade";

const Trolldex = () => {
  const [pokemonInput, setPokemonInput] = useState("");
  const [scenario, setScenario] = useState("");
  const [img, setImg] = useState(funnyimg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("søg på: " + pokemonInput);
    console.log("scenarie: " + scenario);

    await fetchFunnyImage(pokemonInput, scenario);
  };

  const fetchFunnyImage = async (pokename, scenarie) => {
    let fetchUrl = "https://frederikhess.dk/tomcat/CA2/api/dalle/admin";
    const options = facade.makeOptions("POST", true, {
      prompt: pokename + " " + scenarie,
    });
    setImg(cattyping);
    let data = await fetch(fetchUrl, options);
    if (data.status != 200) {
      fetchUrl = "https://frederikhess.dk/tomcat/CA2/api/dalle";
      data = await fetch(fetchUrl, options);
    }
    const res = await data.json();
    setImg(res.data[0].url);
    console.log(res);
    setPokemonInput("");
    setScenario("");
  };

  return (
    <div className="background">
      <form>
        <div>
          <input
            className="input"
            type="text"
            name="name"
            value={pokemonInput}
            onChange={(e) => setPokemonInput(e.target.value)}
            placeholder="Indtast navn på pokemon"
          ></input>
          <input
            className="input"
            type="text"
            name="name"
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            placeholder="feks: eating a banana"
          ></input>
          <input
            className="button"
            type="submit"
            value="Søg"
            onClick={handleSubmit}
          />
        </div>
      </form>
      <div>
        <div id="pokedex">
          <div id="left">
            <div id="logo"></div>
            <div id="bg_curve1_left"></div>
            <div id="bg_curve2_left"></div>
            <div id="curve1_left">
              <div id="buttonGlass">
                <div id="reflect"> </div>
              </div>
              <div id="miniButtonGlass1"></div>
              <div id="miniButtonGlass2"></div>
              <div id="miniButtonGlass3"></div>
            </div>
            <div id="curve2_left">
              <div id="junction">
                <div id="junction1"></div>
                <div id="junction2"></div>
              </div>
            </div>
            <div id="screen">
              <div id="topPicture">
                <div id="buttontopPicture1"></div>
                <div id="buttontopPicture2"></div>
              </div>
              <div id="picture">
                <img src={img} alt="psykokwak" height="170" />
              </div>
              <div id="buttonbottomPicture"></div>
              <div id="speakers">
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
              </div>
            </div>
            <div id="bigbluebutton"></div>
            <div id="barbutton1"></div>
            <div id="barbutton2"></div>
            <div id="cross">
              <div id="leftcross">
                <div id="leftT"></div>
              </div>
              <div id="topcross">
                <div id="upT"></div>
              </div>
              <div id="rightcross">
                <div id="rightT"></div>
              </div>
              <div id="midcross">
                <div id="midCircle"></div>
              </div>
              <div id="botcross">
                <div id="downT"></div>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="stats">
              <strong>Trolldex generating an image</strong>
              <br />
              <br />
              <strong>The pokemon is autimatically generated</strong>
            </div>
            <div id="blueButtons1">
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
            </div>
            <div id="blueButtons2">
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
            </div>
            <div id="miniButtonGlass4"></div>
            <div id="miniButtonGlass5"></div>
            <div id="barbutton3"></div>
            <div id="barbutton4"></div>
            <div id="yellowBox1"></div>
            <div id="yellowBox2"></div>
            <div id="bg_curve1_right"></div>
            <div id="bg_curve2_right"></div>
            <div id="curve1_right"></div>
            <div id="curve2_right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trolldex;
