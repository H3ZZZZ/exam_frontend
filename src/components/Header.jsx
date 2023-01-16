import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
import facade from "../apiFacade";

const Header = (props) => {
  return (
    <nav className="navbar">
      <NavLink className="active" to="/">
        <i className="fa fa-fw fa-user"></i> Homepage
      </NavLink>
      <NavLink to="/trips">
        <i className="fa fa-fw fa-user"></i> Trips
      </NavLink>
      <NavLink to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </NavLink>
      <NavLink to="/register">
        <i className="fa fa-fw fa-user"></i> Register
      </NavLink>
    </nav>
  );
};

export default Header;
