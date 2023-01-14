import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import PersonList from "./components/PersonList";
import Person from "./components/Person";
import App from "./App";
import PokemonContent from "./components/PokemonContent";
import Pokedex from "./components/Pokedex";
import FullPokedex from "./components/FullPokedex";
import Trolldex from "./components/Trolldex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/pokedex">
      <Header />
      <Routes>
        <Route path="/" element={<FullPokedex />} />
        <Route path="/pokedex" element={<PokemonContent />} />
        <Route path="/trolldex" element={<Trolldex />} />
        <Route path="/login" element={<App />} />
        <Route path="*" element={<h1>Page Not Found !!!</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
