import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import LogIn from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import "./index.css";
import { useNavigate } from "react-router-dom";
// Test text for commit

function App() {
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    navigate("/");
  };

  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
    navigate("/login");
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
export default App;
