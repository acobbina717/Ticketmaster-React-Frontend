import ReviewCard from "./ReviewCard";

const ReviewContainer = ({ events }) => {
  return (
    <>
      {events.map((review) => {
        return <ReviewCard />;
      })}
    </>
  );
};

export default ReviewContainer;
