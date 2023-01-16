import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import facade, { API_URL, getUserName, setUserName } from "../apiFacade";

const IndividualTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(API_URL + "/api/trip/all")
      .then((res) => res.json())
      .then((data) =>
        setTrip(data.filter((t) => t.id.toString() === tripId).at(0))
      );
  }, []);

  useEffect(() => {
    if (trip !== null) {
      const username = getUserName();
      if (username) {
        setUser(username);
      }
    }
  }, [trip]);

  const joinEvent = () => {
    fetch(
      API_URL + `/api/trip/join`,
      facade.makeOptions("POST", true, {
        username: user,
        tripid: Number(tripId),
      })
    ).then((e) => console.log(e));
  };

  return trip ? (
    <div>
      <div className="cont">
        <h1>Kom med til {trip.name}</h1>
      </div>
      <div key={trip.name}>
        <p>Starts at {trip.startdate}</p>
        <p>Ends at {trip.enddate}</p>
        <p>
          Duration:
          {formatDistance(new Date(trip.startdate), new Date(trip.enddate))}
        </p>
        <p>Location: {trip.location}</p>
        <p>Packing List: {trip.packingList}</p>
        <h3> Info about the guide</h3>
        <p>Name: {trip.guide.name}</p>
        <p>Gender: {trip.guide.gender}</p>
        <p>Birth Year: {trip.guide.birthYear}</p>
        <p>Description: {trip.guide.profile}</p>
        <img src={trip.guide.imageUrl} alt="Profile image"></img>
        {user && <button onClick={joinEvent}>Join this amazing trip!</button>}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
};

export default IndividualTrip;
