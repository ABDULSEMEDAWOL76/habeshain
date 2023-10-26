import React from "react";
import "./Review.scss";
import { Slider } from "infinite-react-carousel/lib";
function Review() {
  return (
    <div className="review">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs"> </span>
          <h1>Resort and Hotels</h1>
         
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JB4fhPXjWID_KhAkn_czQCFPGYD7HzG7Ig&usqp=CAU"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7AFsK2TdPI3aTzJx1ovqkkuXbXxpQwMpYQ&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT863niqZwVLXbbIxWPbjL1Mob7iS6gdLOrbQ&usqp=CAU"/></Slider>
            
          <h2>Sheaton Addis Hotel</h2>
          <p>
          Sheraton Addis, a Luxury Collection Hotel is an excellent choice
           for travelers visiting Addis Ababa, offering a romantic environment 
           alongside many helpful amenities designed to enhance your stay.
          </p>
          <div className="seller">
            <h2> </h2>
            <div className="user">
              <div className="info">
             </div>
            </div>
            <div className="box">
             <hr />
              <p>
               Enter your Comments
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Comments</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Abay Wase</span>
                  <div className="country">
                    <img
                      src=""
                      alt=""
                    />
                    <span>Addis Abab</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Very professional and pleasant staff at reception and restaurants.  Lovely grounds around the hotel to walk around and relax
              </p>
              </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                   
                    <span>Adama</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              beds were great, balcony that was useable; very friendly staff; beautiful landscaping
              </p>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    
                    <span>Hawassa</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              It was excellent. The rooms are very clean
              </p>
            </div>
          </div>
        </div>
       
        </div>
      </div>
    
  );
}

export default Review;