import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import App from "./App";
import Contentpage from "./components/ContentPage";
import IndividualTrip from "./components/IndividualTrip";
import CreateTrip from "./components/CreateTrip";
import CreateGuide from "./components/CreateGuide";
import Register from "./components/Register";
// import AdminPage from "./components/AdminPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/exam3sem">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trips" element={<Contentpage />}></Route>
        <Route path="trips/:tripId" element={<IndividualTrip />}></Route>
        <Route path="trips/create/trip" element={<CreateTrip />}></Route>
        <Route path="trips/create/guide" element={<CreateGuide />}></Route>
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page Not Found !!!</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
