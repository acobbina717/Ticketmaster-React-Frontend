import NavBar from "./NavBar";
import { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <NavBar />;
};

export default Profile;
