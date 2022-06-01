<<<<<<< Updated upstream
import EventCard from "./EventCard";
=======
// import EventContainer from "./EventContainer";
>>>>>>> Stashed changes
import NavBar from "./NavBar";
import EventReviewPage from "./EventReviewPage";

const Home = ({ events, reviews }) => {
  return (
    <>
      <NavBar />
<<<<<<< Updated upstream
      <EventCard events={events} reviews={reviews} />
=======
      {/* <EventContainer events={events} /> */}
      <EventReviewPage />
>>>>>>> Stashed changes
    </>
  );
};

export default Home;
