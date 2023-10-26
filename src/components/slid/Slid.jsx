// import React from "react";
// import "./Slid.scss";
// import Slider from "infinite-react-carousel";

// const Slid = ({ children, slidesToShow, arrowsScroll }) => {
//   return (
//     <div className="slid">
//       <div className="container">
//         <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//           {children}
//         </Slider>
       
//       </div>
      
//     </div>
//   );
// };

// export default Slid;
import React from "react";
import "./Slid.scss";
import Slider from "infinite-react-carousel";

const Slid = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slid">
      <div className="container">
        <div className="left-slider">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children.slice(0, Math.ceil(children.length / 2))}
          </Slider>
        </div>
        <div className="right-slider">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children.slice(Math.ceil(children.length / 2))}
          </Slider>
        </div>
     </div>
     </div>
   );
};

 export default Slid;
