// import React, { useEffect, useState } from "react";
// import { BackgroundImage, Center, Text, Box } from "@mantine/core";
// // import ReviewContainer from "./ReviewContainer";

// const EventReviewPage = ({events}) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [event, setEvent] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   const ids = events.map(event => event.id);

//   const getEvent = () => {
//     fetch(`http://localhost:9292/events/${id}`, {})
//       .then((res) => res.json())
//       .then((response) => {
//         setEvent(response);
//         setIsLoading(false);
//       })
//       .catch((error) => console.log(error));
//   };

//   const getReviews = () => {
//     fetch("http://localhost:9292/reviews", {})
//       .then((res) => res.json())
//       .then((response) => {
//         setReviews(response);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getEvent();
//     getReviews();
//   }, []);

//   return (
//     <>
//       {!isLoading && (
//         <>
//           <Box>
//             <BackgroundImage
//               src="https://e7n9s5t9.stackpathcdn.com/articles/wp-content/uploads/2018/12/thunder-vs-jazz-760x422.jpg"
//               radius="md"
//               style={{
//                 height: "500px",
//                 position: "relative",
//                 backgroundSize: "contain",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <Center p="md">
//                 <Text color="#fff">
//                   <h1>{event.event_name}</h1>
//                   <h2>Location: {event.location}</h2>
//                   <h2>Start Time: {event.start_time}</h2>
//                   <h2>End Time: {event.end_time}</h2>
//                   <h2>Event Rating: {event.rating}</h2>
//                 </Text>
//               </Center>
//             </BackgroundImage>
//           </Box>
//         </>
//       )}
//       {/* <ReviewContainer reviews={reviews} /> */}
//     </>
//   );
// };

// export default EventReviewPage;