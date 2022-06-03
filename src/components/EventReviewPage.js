import React, { useEffect, useState } from "react";
import {
  TextInput,
  Checkbox,
  BackgroundImage,
  Center,
  Text,
  Box,
  Card,
  Textarea,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { EventAvailableRounded } from "@mui/icons-material";

function EventReviewPage({ events }) {
  const [eventId, setEventId] = useState({ reviews: [] });
  const [comment, setComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/events/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setEventId(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const reviewItem = eventId.reviews.map((review) => (
    <ReviewCard key={review.id} review={review} id={review.id} />
  ));

  const form = useForm({
    initialValues: {
      comment: "",
      event_id: parseInt(`${id}`),
    },
  });

  function handleForm(newReview) {
    const newReviewArray = [...eventId.reviews, newReview];
    setEventId(newReviewArray);
  }

  function handleComment(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_id: `${id}`,
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((newReview) => console.log(newReview));
  }

  // const theme = useMantineTheme();

  // const secondaryColor = theme.colorScheme === 'dark'
  //   ? theme.colors.dark[1]
  //   : theme.colors.gray[7];

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
      <div style={{ width: 340, margin: "auto" }}>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Text size="sm" style={{ lineHeight: 1.5 }}></Text>
            {reviewItem}
            <Box sx={{ maxWidth: 300 }} mx="auto">
              <form onSubmit={handleSubmit}>
                <TextInput
                  placeholder="comment..."
                  {...form.getInputProps("comment")}
                  value={comment}
                  onChange={handleComment}
                />

                <Group position="right" mt="md">
                  <Button type="submit">Submit</Button>
                </Group>
              </form>
            </Box>
          </Card.Section>
        </Card>
      </div>
    </>
  );
}

export default EventReviewPage;

{
  /* <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}> */
}

// console.log("id is", id);
// //   console.log("event from event review page", events);
// //   const currentEvent = events.filter((event) => {
// //     console.log(event.id);
// //     console.log(event);
// //     return event.id === parseInt(id);
// //   });

// //   console.log("this is the event id", eventId[0].reviews[0].comment);
// console.log("this is the eventId", eventId.reviews);
