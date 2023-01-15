import React, { useState } from "react";
import OwnersList from "./OwnersList";

function ContentPage() {
  const [boatId, setBoatId] = useState("");
  const [owners, setOwners] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://frederikhess.dk/tomcat/exam/api/owner/${boatId}`
      );
      if (response.ok) {
        const data = await response.json();
        setOwners(data);
        setMessage("");
      } else if (response.status === 404) {
        setMessage("Boat not found.");
      } else {
        setMessage("An error occurred while searching for boat owners.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while searching for boat owners.");
    }
  };
  return (
    <div className="content-page">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="search-label">Boat ID:</div>
          <input
            className="search-input"
            type="text"
            value={boatId}
            onChange={(event) => setBoatId(event.target.value)}
          />
        </label>
        <br />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <OwnersList owners={owners} message={message} />
    </div>
  );
}

export default ContentPage;
