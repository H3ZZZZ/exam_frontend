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
import Contentpage from "./components/ContentPage";
import Register from "./components/Register";
// import AdminPage from "./components/AdminPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/exam3sem">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contentpage" element={<Contentpage />} />
        {/* <Route path="/pokedex" element={<PokemonContent />} />
        <Route path="/trolldex" element={<Trolldex />} /> */}
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="*" element={<h1>Page Not Found !!!</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
