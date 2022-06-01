import ReviewCard from "./ReviewCard";

const ReviewContainer = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review.id}
            user_id={review.user_id}
            comment={review.comment}
            rating={review.rating}
          />
        );
      })}
    </>
  );
};

export default ReviewContainer;
