import React from "react";
import "./Home.scss";// import scss
import Featured from "../../components/featured/Featured";
// import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slid from "../../components/slid/Slid";
import CatCard from "../../components/catCard/CatCard";
// import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects, reviews } from "../../data";
// import Add_discover from "./add_discover"
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Featured />

    <Slid slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
           
      </Slid>
      
    
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The Local Discovery and Review Platform is your gateway to a world of diverse local businesses</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Inclusive directory and reviews for businesses.
            </div>
            <p>
            A comprehensive directory and review platform, allowing users to find and review various businesses.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Tailored search, detailed listings, user reviews.
            </div>
            <p>
            Users can search, access detailed listings, and read reviews to make informed decisions
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Engaging community, personalized recommendations, valuable insights.
            </div>
            <p>
            Join a vibrant community, get personalized recommendations, and gain valuable insights.
            </p>
         

            <div className="title">
              <img src="./img/check.png" alt="" />
              Secure, responsive design for all devices
            </div>
            <p>
            Enjoy a secure, responsive design across devices for a seamless user experience.
            </p>
          </div>
         
         
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
           <Link className="link" to="/Restuarante">
           <div className="item">
              <img
                src="data:image/png;base64,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"
               alt="Restuarnte image"
              />
              <div className="line"></div>
              <span>Restuarante</span>
            </div>
           </Link>
           <Link className="link" to="/digitalMarketing">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            </Link>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            
          <Link className="link" to="/coffee">
          <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt="coffe shopping image"
              />
              <div className="line"></div>
              <span>coffe</span>
            </div>
          </Link>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
           <Link className="link" to="/resort">
           <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Resort</span>
            </div>
           </Link>
         <Link className="link" to="/business" >
         <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
         </Link>
          <Link className="link" to="/hotel">
          <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Hotel</span>
            </div>
            </Link>
          <Link className="link" to="/gas">
          <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Gas</span>
            </div>
          </Link>
         <Link className="link" to="/businessService">
         <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdxhdI224ExVdL792CXTwWUS403nzQgsDye2boizXBA&s"
                alt=""
              />
              <div className="line"></div>
              <span>Business service</span>
            </div>
         </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Home; 
