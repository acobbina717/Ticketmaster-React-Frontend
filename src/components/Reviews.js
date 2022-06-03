import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import {
  Card,
  Textarea,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const getReviews = () => {
    fetch(`http://localhost:9292/reviews/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setReviews(response);
      })
      .catch((error) => console.log(error));
  };

  const eventId = reviews.event_id;
  console.log(eventId);

  const form = useForm({
    initialValues: {
      comment: "",
      event_id: parseInt(`${id}`),
    },
  });

  //----------------------------
  // Function to edit a review

  const submit = form.onSubmit((values) => {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: values.comment,
        event_id: eventId,
      }),
    }).then(getReviews());
    form.reset();
  });

  //---------------------------------

  useEffect(() => {
    getReviews();
  }, []);
  console.log("this is the event ID", reviews.event_id);
  console.log("this is from the form submit", form.values);
  console.log("this is the review id", id);
  return (
    <>
      <NavBar />;
      <Card>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          {reviews.comment}
        </Text>
        <form onSubmit={submit}>
          <Textarea
            placeholder="Your comment"
            {...form.getInputProps("comment")}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Card>
    </>
  );
};

export default Reviews;
