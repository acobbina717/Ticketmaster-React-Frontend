import React from "react";
import {
  Card,
  Textarea,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function ReviewCard({ review, id }) {
  //------------------------
  // Function to delete a review

  // function handleDeleteClick() {
  //   fetch(`http://localhost:9292/reviews/${id}`, {
  //     method: "DELETE",
  //   });

  //   onDeleteReview(id);
  // }
  //---------------------

  //----------------------------
  // Function to edit a review

  // function handleReviewEdit(e) {
  //   e.preventDefault();

  //   fetch("http://localhost:9292/reviews", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       event_id: `${id}`,
  //       comment: comment,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((updatedReview) => console.log(updatedReview));
  // }

  //---------------------------------

  return (
    <>
      <Card>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          {review.comment}
          <Badge position="right" color="dark" variant="light">
            Edit
          </Badge>
          <Badge position="right" color="dark" variant="light">
            Delete
          </Badge>
        </Text>
      </Card>
    </>
  );
}

export default ReviewCard;
