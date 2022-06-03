import React from "react";

import { Link } from "react-router-dom";
import {
  Card,
  Textarea,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function ReviewCard({ review, onDeleteReview }) {
  //------------------------
  // Function to delete a review

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    });

    onDeleteReview(review.id);
  }
  //---------------------

  return (
    <>
      <Card>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          {review.comment}
          <Link to={`/reviews/${review.id}`}>
            <Badge position="right" color="dark" variant="light">
              Edit
            </Badge>
          </Link>
          <Badge
            onClick={handleDeleteClick}
            position="right"
            color="dark"
            variant="light"
          >
            Delete
          </Badge>
        </Text>
      </Card>
    </>
  );
}

export default ReviewCard;
