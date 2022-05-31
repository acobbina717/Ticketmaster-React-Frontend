import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      .then((events_data) => setEvents(events_data));
  };

  useEffect(() => {
    getEvents();
  }, []);

  console.log(events);

  return <Home events={events} />;
}

export default App;
