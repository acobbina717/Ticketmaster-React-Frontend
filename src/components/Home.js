import EventCard from "./EventCard";
import NavBar from "./NavBar";

const Home = ({ events }) => {
  return (
    <>
      <NavBar />
      <EventCard events={events} />
    </>
  );
};

export default Home;
