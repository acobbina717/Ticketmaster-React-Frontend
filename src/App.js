import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Popup from "./components/Popup";
import SignInForm from "./components/SignInForm";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";

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

  return (
    <>
      {/* <Profile /> */}
      {/* <Reviews /> */}
      {/* <Popup></Popup> */}
      {/* <SignInForm /> */}
      <Home events={events} />
    </>
  );
}

export default App;
