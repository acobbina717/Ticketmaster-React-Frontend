import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import ReviewContainer from "./ReviewContainer";
import { useParams } from "react-router-dom";

const EventReviewPage = ({ events }) => {
  //   const [reviews, setReviews] = useState([]);
  const { id } = useParams();

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

  return (
    //   {events.filter(event => event.id === id).map((event) => <h1>{event.event_name}</h1>)}
    <h1>{id}</h1>
  );
};

export default EventReviewPage;

// {
/* <Box>
<BackgroundImage
  src={event.image}
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
</Box> */
// }
