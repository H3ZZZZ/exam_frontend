import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://frederikhess.dk/tomcat/exam/api/user/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, role: userType }),
        }
      );
      if (response.ok) {
        setMessage(`You were successfully registered as a ${userType}`);
        setUsername("");
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
            <option value="admin">Admin</option>
            <option value="user">User</option>
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
