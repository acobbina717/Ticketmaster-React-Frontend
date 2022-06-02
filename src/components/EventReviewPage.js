import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import ReviewContainer from "./ReviewContainer";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { EventAvailableRounded } from "@mui/icons-material";

const EventReviewPage = ({ events }) => {
  //   const [reviews, setReviews] = useState([]);
  const [eventId, setEventId] = useState([]);

  const { id } = useParams();
  console.log("id is", id);
  //   console.log("event from event review page", events);
  //   const currentEvent = events.filter((event) => {
  //     console.log(event.id);
  //     console.log(event);
  //     return event.id === parseInt(id);
  //   });

  //   console.log("this is the event id", eventId[0].reviews[0].comment);
  console.log("this is the eventId", eventId.reviews);

  //   const getReviews = () => {
  //     fetch("http://localhost:9292/reviews")
  //       .then((res) => res.json())
  //       .then((response) => {
  //         setReviews(response);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   useEffect(() => {
  //     getReviews();
  //   }, []);

  const getEventId = () => {
    fetch(`http://localhost:9292/events/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setEventId(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEventId();
  }, []);

  //   console.log("from event review page", currentEvent);

  return (
    <>
      <NavBar />
      <Box>
        <BackgroundImage
          src={eventId.image_url}
          radius="md"
          style={{
            height: "500px",
            position: "relative",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Center p="md">
            <Text color="#fff">
              <h1>{eventId.event_name}</h1>
              <h2>Location: {eventId.location}</h2>
            </Text>
          </Center>
        </BackgroundImage>
      </Box>
      {eventId.reviews.map((review) => (
        <h3>{review.comment}</h3>
      ))}
    </>
  );
};

export default EventReviewPage;
