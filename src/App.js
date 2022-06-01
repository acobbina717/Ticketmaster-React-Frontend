import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [events, setEvents] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getEvents = () => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      .then((events_data) => setEvents(events_data));
  };

  const getReviews = () => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      .then((reviews_data) => setEvents(reviews_data));
  };

  useEffect(() => {
    getEvents();
    getReviews();
  }, []);

  console.log(events);

  return <Home events={events} reviews={reviews} />;
}

export default App;
