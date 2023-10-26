
import React, { useState } from 'react';
import './WriteRev.scss';
import AbduCard from "../../components/abduCard/AbduCard";
import { Raki} from "../../data";


const WriteRev = ({ initialValue }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  <AbduCard key={Raki.id} img={Raki.img}/>

  return (
    <div className="write-rev-container">
      <img src={Raki.img}></img>
      <div className='raee'>
      <h1>Rate-{rating}-</h1>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          value={value}
          filled={value <= rating}
          onClick={handleRatingChange}
          className="star"
        />
      ))}</div>
     <textarea name="" id="" placeholder="Write Review" cols="30" rows="10"></textarea>
      <button className='buttonn'>Post Review</button>
    </div>
  );
};

const Star = ({ value, filled, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <span
      style={{ cursor: 'pointer', fontSize: '43px' , margin: '-10px 0 0 0px' , color: filled ? 'gold' : 'gray' }}
      onClick={handleClick}
    >
      &#9733;
    </span>
  );
};

export default WriteRev;