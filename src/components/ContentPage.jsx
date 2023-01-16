import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import facade from "../apiFacade";
const Contentpage = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  let isAdmin = false;
  const fToken = facade.getToken();

  if (fToken) {
    const token = jwtDecode(fToken)?.roles;
    isAdmin = token?.toLowerCase()?.includes("admin");
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/trip/all")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="all-trips">
      {isAdmin && (
        <div className="all-trips-button">
          <div className="button-cont">
            <button onClick={() => navigate("create/trip")}>
              Create new trip
            </button>
            <button onClick={() => navigate("create/guide")}>
              Create new guide
            </button>
          </div>
        </div>
      )}
      <div className="cont">
        <h1>All trips</h1>
      </div>
      {trips?.map((trip) => (
        <div
          key={trip.name}
          onClick={() => navigate(trip.id.toString())}
          className="trip"
        >
          <h2>{trip.name}</h2>
          <p>{trip.startdate}</p>
          <p>{trip.enddate}</p>
        </div>
      ))}
    </div>
  );
};

export default Contentpage;
