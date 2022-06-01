import EventCard from "./EventCard";
import NavBar from "./NavBar";

const Home = ({ events, reviews }) => {
  return (
    <>
      <NavBar />
      <EventCard events={events} reviews={reviews} />
    </>
  );
};

export default Home;
