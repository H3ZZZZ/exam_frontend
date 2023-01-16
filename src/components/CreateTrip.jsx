import facade, { API_URL } from "../apiFacade";
import React, { useState } from "react";
import { useEffect } from "react";

const CreateTrip = () => {
  const [name, setName] = useState("");
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [packingList, setPackingList] = useState("");
  const [message, setMessage] = useState("");
  const [guides, setGuides] = useState("");
  const [selectedGuide, setSelectedGuide] = useState();
  console.log(guides);
  useEffect(() => {
    fetch(API_URL + "/api/guide/all")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const test1 = new Date(startdate).toJSON();
    const test2 = new Date(enddate).toJSON();
    try {
      const response = await fetch(API_URL + "/api/trip/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          startdate: test1,
          enddate: test2,
          location: location,
          packing_list: packingList,
          guide_id: Number(selectedGuide),
        }),
      });
      if (response.ok) {
        setMessage("You were successfully registered");
        setName("");
        setStartDate("");
        setEndDate("");
        setLocation("");
        setImageurl("");
      } else {
        const error = await response.json();
        console.error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return guides ? (
    <div>
      Create new trip
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
            <div className="register-label">startdate:</div>
            <input
              className="register-input"
              type="datetime-local"
              value={startdate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label>
            <div className="register-label">enddate:</div>
            <input
              className="register-input"
              type="datetime-local"
              value={enddate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <br />
          <label>
            <div className="register-label">Location:</div>
            <input
              className="register-input"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <br />
          <label>
            <div className="register-label">Packing list:</div>
            <input
              className="register-input"
              type="text"
              value={packingList}
              onChange={(event) => setPackingList(event.target.value)}
            />
          </label>
          <br />
          <label>
            <div className="register-label">Guide:</div>
            <select
              className="register-select"
              value={selectedGuide}
              onChange={(event) => setSelectedGuide(event.target.value)}
            >
              <option value="" disabled>
                Select guide
              </option>
              {guides?.map((guide) => (
                <option key={guide.id} value={guide.id}>
                  {guide.name}
                </option>
              ))}
            </select>
          </label>

          <button className="register-button" type="submit">
            Create Guide
          </button>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CreateTrip;
