// // import React from "react";
// // import "./Slide.scss";
// // import Slider from "infinite-react-carousel";

// // const Slide = ({ children, slidesToShow, arrowsScroll }) => {
// //   return (
// //     <div className="slide">
// //       <div className="container">
// //         <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
// //           {children}
// //         </Slider>
       
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default Slide;



// import upload from "../../utils/upload";
// import newRequest from "../../utils/newRequest";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert";

// import React, { useState } from 'react';
// import "./Slide.scss";
// import Slider from "infinite-react-carousel";

// const Slide = ({ children, slidesToShow, arrowsScroll }) => {


//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === "file") {
//       setFile(e.target.files[0]);
//     } else {
//       setUser((prev) => {
//         return { ...prev, [e.target.name]: e.target.value };
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

   

//     try {
//       const response = await axios.get('/api/reviews');
//       const reviews = response.data;
//       navigate("/login");
//       Swal("Good job!", "You have successfully registered!", "success");
//     } catch (err) {
//       console.log(err);
//       console.log("error happened");
//       Swal("You have entered wrong data!", "Please try again", "error");
//     }
//   };


//   return (
//     <div className="slide" handleSubmit>
//       <div className="container">
//         <div className="left-slider">
//           <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//             {children
//               .slice(0, Math.ceil(children.length / 2))
//               .map((child, index) => (
//                 <div key={index} className="card">
//                   {child}
//                   <Rating onChange={handleChange}/>
//                   <div className="review">
//                     <textarea placeholder="Write a review  " onChange={handleChange} />
                    
//                   </div>
//                   <button type="submit" className="bro" > Post Review</button>
//                 </div>
//               ))}
//           </Slider>
//         </div>
//         <div className="right-slider">
//           <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//             {children
//               .slice(Math.ceil(children.length / 2))
//               .map((child, index) => (
//                 <div key={index} className="card" onChange={handleChange}>
//                   {child}
//                   <Rating  onChange={handleChange}/>
//                   <div className="review">
//                     <textarea placeholder="Write a review " onChange={handleChange}/>
//                     </div>
                    
//                     <button  type="submit" className="bro">Post Review</button>
                    
               
//                 </div>
//               ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Rating = () => {
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <div className="rating">
//       {/* <h1>Rate: {rating}</h1> */}
//       {[1, 2, 3, 4, 5].map((value) => (
//         <Star
//           key={value}
//           value={value}
//           filled={value <= rating}
//           onClick={handleRatingChange}
//           className="star"
//         />
//       ))}
//     </div>
//   );
// };

// const Star = ({ value, filled, onClick }) => {
//   const handleClick = () => {
//     onClick(value);
//   };

//   return (
//     <span
//       style={{ cursor: 'pointer', fontSize: '40px', margin: '0 5px', color: filled ? 'gold' : 'gray' }}
//       onClick={handleClick}
//     >
//       &#9733;
//     </span>
//   );
// };

// export default Slide;

// import React, { useState } from 'react';
// import Slider from 'infinite-react-carousel';
// import axios from 'axios'; // Import axios for making HTTP requests
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert';

// import './Slide.scss';

// const Slide = ({ children, slidesToShow, arrowsScroll }) => {
//   const navigate = useNavigate();
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'review') {
//       setReview(e.target.value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make an HTTP request to send the review data to the backend
//       const response = await axios.post("http://localhost:3300/api/reviews/", {
//         rating: rating,
//         review: review,
//       });
      
//       // Assuming the backend responds with a success message
//       navigate('/login');
//       Swal('Good job!', 'You have successfully registered!', 'success');
//     } catch (err) {
//       console.log(err);
//       console.log('error happened');
//       Swal('You have entered wrong data!', 'Please try again', 'error');
//     }
//   };

//   return (
//     <div className="slide">
//       <div className="container">
//         <div className="left-slider">
//           <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//             {children
//               .slice(0, Math.ceil(children.length / 2))
//               .map((child, index) => (
//                 <div key={index} className="card" onClick={handleSubmit}>
//                   {child}
//                   <Rating rating={rating} onChange={handleRatingChange} />
//                   <div className="review">
//                     <textarea
//                       name="review"
//                       placeholder="Write a review"
//                       value={review}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <button type="submit" className="bro">
//                     Post Review
//                   </button>
//                 </div>
//               ))}
//           </Slider>
//         </div>
//         <div className="right-slider">
//           <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//             {children
//               .slice(Math.ceil(children.length / 2))
//               .map((child, index) => (
//                 <div key={index} className="card" onClick={handleSubmit}>
//                   {child}
//                   <Rating rating={rating} onChange={handleRatingChange} />
//                   <div className="review">
//                     <textarea
//                       name="review"
//                       placeholder="Write a review"
//                       value={review}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <button type="submit" className="bro">
//                     Post Review
//                   </button>
//                 </div>
//               ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Rating = ({ rating, onChange }) => {
//   const handleRatingChange = (newRating) => {
//     onChange(newRating);
//   };

//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((value) => (
//         <Star
//           key={value}
//           value={value}
//           filled={value <= rating}
//           onClick={handleRatingChange}
//           className="star"
//         />
//       ))}
//     </div>
//   );
// };

// const Star = ({ value, filled, onClick }) => {
//   const handleClick = () => {
//     onClick(value);
//   };

//   return (
//     <span
//       style={{
//         cursor: 'pointer',
//         fontSize: '40px',
//         margin: '0 5px',
//         color: filled ? 'gold' : 'gray',
//       }}
//       onClick={handleClick}
//     >
//       &#9733;
//     </span>
//   );
// };

// export default Slide;
import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';

import './Slide.scss';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});

  const handleRatingChange = (cardIndex, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [cardIndex]: newRating,
    }));
  };

  const handleChange = (cardIndex, e) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [cardIndex]: e.target.value,
    }));
  };

  const handleSubmit = async (cardIndex) => {
    const rating = ratings[cardIndex] || 0;
    const review = reviews[cardIndex] || '';

    try {
      const response = await axios.post('/reviews', {
        rating: rating,
        review: review,
      });

      navigate('/');
      Swal('Good job!', 'You have successfully registered!', 'success');
    } catch (err) {
      console.log(err);
      Swal('Error!', 'An error occurred while submitting the review. Please try again.', 'error');
    }
  };

  return (
    <div className="slide">
      <div className="container">
        <div className="left-slider">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children
              .slice(0, Math.ceil(children.length / 2))
              .map((child, index) => (
                <div key={index} className="card">
                  {child}
                  <Rating
                    rating={ratings[index]}
                    onChange={(newRating) => handleRatingChange(index, newRating)}
                  />
                  <div className="review">
                    <textarea
                      name="review"
                      placeholder="Write a review"
                      value={reviews[index] || ''}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <button
                    type="button"
                    className="bro"
                    onClick={() => handleSubmit(index)}
                  >
                    Post Review
                  </button>
                </div>
              ))}
          </Slider>
        </div>
        <div className="right-slider">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children
              .slice(Math.ceil(children.length / 2))
              .map((child, index) => (
                <div key={index} className="card">
                  {child}
                  <Rating
                    rating={ratings[Math.ceil(children.length / 2) + index]}
                    onChange={(newRating) =>
                      handleRatingChange(Math.ceil(children.length / 2) + index, newRating)
                    }
                  />
                  <div className="review">
                    <textarea
                      name="review"
                      placeholder="Write a review"
                      value={reviews[Math.ceil(children.length / 2) + index] || ''}
                      onChange={(e) => handleChange(Math.ceil(children.length / 2) + index, e)}
                    />
                  </div>
                  <button
                    type="button"
                    className="bro"
                    onClick={() => handleSubmit(Math.ceil(children.length / 2) + index)}
                  >
                    Post Review
                  </button>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Rating = ({ rating, onChange }) => {
  const handleRatingChange = (newRating) => {
    onChange(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          value={value}
          filled={value <= rating}
          onClick={handleRatingChange}
          className="star"
        />
      ))}
    </div>
  );
};

const Star = ({ value, filled, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <span
      style={{
        cursor: 'pointer',
        fontSize: '40px',
        margin: '0 5px',
        color: filled ? 'gold' : 'gray',
      }}
      onClick={handleClick}
    >
      &#9733;
    </span>
  );
};

export default Slide;