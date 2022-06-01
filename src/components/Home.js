
   
import EventContainer from "./EventContainer";
import NavBar from "./NavBar";


const Home = ({ events }) => {
  return (
    <>
      <NavBar />
      <EventContainer events={events} />
    </>
  );
};

export default Home;