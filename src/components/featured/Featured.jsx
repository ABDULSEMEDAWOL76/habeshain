// import React from "react";
// import "./Featured.scss";

// function Featured() {
//   return (
//     <div className="featured">
//       <div className="container">
//         <div className="left">
//           <h1 className="h">HabeshaInsights</h1>
//           <h1>
//             Find the perfect <span>freelance</span> services for your business
//           </h1>
//           <div className="search">
//             <div className="searchInput">
//               <img src="./img/search.png" alt="" />
//               <input type="text" placeholder='Try "building mobil app"' />
//             </div>
//             <button>Search</button>
//           </div>
//           <div className="popular">
//             <span>Popular:</span>
//             <button>Resort</button>
//             <button>Shear Addis Hotel</button>
//             <button>Haile Resort</button>
//             <button>Services</button>
//           </div>
//         </div>
//         <div className="right">
//           {/* <img src="./img/se.png" alt="" /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;
// import React from "react";
// import "./Featured.scss";

// function Featured() {
//   return (
//     <div className="featured">
//       <div className="container">
        
//         <div className="left">
//           <h1>
//           Discover and connect with the best Local Services
//           </h1>
//           <div className="search">
//             <div className="searchInput">
//               <img src="./img/search.png" alt="" />
//               <input type="text" placeholder='' />
//             </div>
//             <button>Search</button>
//           </div>
//           <div className="popular">
//             <button>Resturant</button>
//             <button>GAS</button>
//             <button>Coffee</button>
//             <button>Hotel</button>
//           </div>
//         </div>
//         {/* <div className="right">
//           <img src="./img/se.jpg" alt="" />
//         </div> */}
//       </div>
//     </div>
//   );
// }
// export default Featured;
import "./Featured.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/reviews?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        
        <div className="left">
          <h1>
          Discover and connect with the best Local Services
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try " fornt-end "'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <Link className="link" to="/restuarante">
            <button>Resturant</button>
            </Link>
            <Link className="link" to="/coffee">
            <button>Coffee</button>
            </Link>
            <Link className="link" to="/hotel">
            <button>Hotel</button>
            </Link>
            <Link className="link" to="/gas">
            <button>Gas</button>
            </Link>
            
            
            
            
          </div>
        </div>
        {/* <div className="right">
          <img src="./img/se.jpg" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Featured;

