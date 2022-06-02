import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Help from "./components/Help";
import Popup from "./components/Popup";
import {Routes, Route} from "react-router-dom";
import EventReviewPage from "./components/EventReviewPage";
// import SignInForm from "./components/SignInForm";

function App() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  const getEvents = () => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      .then((events_data) => setEvents(events_data));
  };

  useEffect(() => {
    getEvents();
  }, []);

  console.log(events);


  const getUsers = () => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users_data) => setUsers(users_data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      {/* <Popup></Popup> */}
      {/* <SignInForm /> */}
      <Routes>
        <Route 
          path="/" 
          element={
            <Home events={events} />
          } 
        />
        <Route 
          path="/userprofile" 
          element={
            <UserProfile users={users}/>
          } 
        />
        <Route 
          path="/eventreviewpage" 
          element={
            <EventReviewPage events={events} />
          } 
        />
        <Route 
          path="/help" 
          element={
            <Help />
          } 
        />
        </Routes>
    </>
  );
}

export default App;
