import React, { useState } from "react";
import { useEffect } from "react";
import facade, { API_URL } from "../apiFacade";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/api/user/roles")
      .then((res) => res.json())
      .then((data) => setRoles(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL + "/api/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email, role: userType }),
      });
      if (response.ok) {
        setMessage("You were successfully registered");
        setUsername("");
        setEmail("");
        setPassword("");
        setUserType("");
      } else {
        const error = await response.json();
        console.error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-form">
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <div className="register-label">Username:</div>
          <input
            className="register-input"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <div className="register-label">Email:</div>
          <input
            className="register-input"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          <div className="register-label">Password:</div>
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          <div className="register-label">User Type:</div>
          <select
            className="register-select"
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
          >
            <option value="" disabled>
              Select user type
            </option>
            {roles?.map((role) => (
              <option key={role.id} value={role.id}>
                {role.roleName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button className="register-button" type="submit" disabled={!userType}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
