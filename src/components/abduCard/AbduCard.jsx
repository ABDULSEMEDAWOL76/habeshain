import React from "react";
import { Link } from "react-router-dom";
import "./AbduCard.scss";

function AbduCard({ card }) {
  return (
    <Link to="/?abdu=design">
      <div className="AbduCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
       
      </div>
    </Link>
  );
}
export default AbduCard;