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
import SignInForm from "./SignInForm";

function EventReviewPage() {
  const [event, setEvent] = useState({ reviews: [] });
  const { id } = useParams();

  const getEventReviews = () => {
    fetch(`http://localhost:9292/events/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEventReviews();
  }, []);

  const reviewItem = event.reviews.map((review) => (
    <ReviewCard key={review.id} review={review} id={review.id} />
  ));

  const form = useForm({
    initialValues: {
      comment: "",
      event_id: parseInt(`${id}`),
    },
  });

  const submit = form.onSubmit((values) => {
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(getEventReviews());
    form.reset();
  });
  // console.log(form.values.event_id);

  // function handleSubmit(e) {
  //   e.preventDefault();

  // const theme = useMantineTheme();

  // const secondaryColor = theme.colorScheme === 'dark'
  //   ? theme.colors.dark[1]
  //   : theme.colors.gray[7];

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

      <div style={{ width: 340, margin: "auto" }}>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Text size="sm" style={{ lineHeight: 1.5 }}></Text>
            {reviewItem}
            <Box sx={{ maxWidth: 300 }} mx="auto">
              <form onSubmit={submit}>
                <TextInput
                  placeholder="comment..."
                  {...form.getInputProps("comment")}
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
