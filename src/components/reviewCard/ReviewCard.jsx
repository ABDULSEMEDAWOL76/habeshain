import React from "react";
import "./ReviewCard.scss";
import { Link } from "react-router-dom";

const ReviewCard= ({ item }) => {
  return (
    <Link to="/review/123" className="link">
      <div className="ReviewCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          
          <div className="price">
           
            <h2>
             
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
