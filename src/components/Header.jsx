import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar">
      <NavLink className="active" to="/">
        <i className="fa fa-fw fa-user"></i> Homepage
      </NavLink>
      <NavLink to="/contentpage">
        <i className="fa fa-fw fa-user"></i> Content Page
      </NavLink>
      {/* <NavLink className="active" to="/pokedex">
        <i className="fa fa-fw fa-user"></i> Pokedex
      </NavLink>
      <NavLink className="active" to="/trolldex">
        <i className="fa fa-fw fa-user"></i> Trolldex
      </NavLink> */}
      <NavLink to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </NavLink>
      <NavLink to="/register">
        <i className="fa fa-fw fa-user"></i> Register
      </NavLink>
      {/* <NavLink to="/admin">
        <i className="fa fa-fw fa-user"></i> Admin page
      </NavLink> */}
    </nav>
  );
};

export default Header;
