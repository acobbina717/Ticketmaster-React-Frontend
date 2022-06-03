import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import ReviewContainer from "./ReviewContainer";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { EventAvailableRounded } from "@mui/icons-material";

const EventReviewPage = ({}) => {
  //   const [reviews, setReviews] = useState([]);
  const [event, setEvent] = useState({ reviews: [] });

  const { id } = useParams();
  console.log("id is", id);
  console.log("event from event review page", event);
  console.log(
    "reviews from event review page",
    event.reviews.map((review) => {
      return review.comment;
    })
  );

  const getEventId = () => {
    fetch(`http://localhost:9292/events/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setEvent(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEventId();
  }, []);

  return (
    <>
      <NavBar />
      <Box>
        <BackgroundImage
          src={event.image_url}
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
              <h1>{event.event_name}</h1>
              <h2>Location: {event.location}</h2>
            </Text>
          </Center>
        </BackgroundImage>
      </Box>
      {event.reviews.map((review) => (
        <h3 key={review.id}>{review.comment}</h3>
      ))}
    </>
  );
};

export default EventReviewPage;
