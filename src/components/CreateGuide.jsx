import facade, { API_URL } from "../apiFacade";
import React, { useState } from "react";
import { useEffect } from "react";

const CreateGuide = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthyear, setBirthYear] = useState("");
  const [profile, setProfile] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL + "/api/guide/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          gender,
          birth_year: birthyear,
          profile,
          image_url: imageurl,
        }),
      });
      if (response.ok) {
        setMessage("You were successfully registered");
        setName("");
        setGender("");
        setBirthYear("");
        setProfile("");
        setImageurl("");
      } else {
        const error = await response.json();
        console.error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Create new guide
      <div className="register-form">
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            <div className="register-label">Name:</div>
            <input
              className="register-input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            <div className="register-label">gender:</div>
            <input
              className="register-input"
              type="text"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
          </label>
          <br />
          <label>
            <div className="register-label">Birth Year:</div>
            <input
              className="register-input"
              type="text"
              value={birthyear}
              onChange={(event) => setBirthYear(event.target.value)}
            />
          </label>
          <br />
          <label>
            <div className="register-label">Profile desc:</div>
            <textarea
              className="register-input"
              type="text"
              value={profile}
              onChange={(event) => setProfile(event.target.value)}
            />
          </label>
          <label>
            <div className="register-label">Image url:</div>
            <input
              className="register-input"
              type="text"
              value={imageurl}
              onChange={(event) => setImageurl(event.target.value)}
            />
          </label>
          <br />
          <button className="register-button" type="submit">
            Create Guide
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGuide;
