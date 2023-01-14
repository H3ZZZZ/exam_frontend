import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {

  return (
    <nav className="navbar">
      <NavLink className="active" to="/">
        <i className="fa fa-fw fa-user"></i> Pokemoner
      </NavLink>
      <NavLink className="active" to="/pokedex">
        <i className="fa fa-fw fa-user"></i> Pokedex
      </NavLink>
      <NavLink className="active" to="/trolldex">
        <i className="fa fa-fw fa-user"></i> Trolldex
      </NavLink>
      <NavLink to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </NavLink>
    </nav>
  );
};

export default Header;
