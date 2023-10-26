import React, { useRef, useState } from "react";
import "./Reviews.scss";
import { reviews } from "../../data";
import ReviewCard from "../../components/reviewCard/ReviewCard";

function Reviews() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="reviews">
      <div className="container">
        <span className="breadcrumbs">HabeshaInsights"  </span>
        <h1>Reviews </h1>
        <p>
          Explore the  technology with HabeshaInsights 
        </p>
        <div className="menu">
     
        </div>
        <div className="cards">
          {reviews.map((gig) => (
            <ReviewCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
// import React, { useRef, useState } from "react";
// import "./Reviews.scss";
// import { Reviews } from "../../data";
// import ReviewCard from "../../components/reviewCard/ReviewCard";

// function Reviews() {
//   const [sort, setSort] = useState("sales");
//   const [open, setOpen] = useState(false);
//   const minRef = useRef();
//   const maxRef = useRef();

//   const reSort = (type) => {
//     setSort(type);
//     setOpen(false);
//   };

//   const apply = ()=>{
//     console.log(minRef.current.value)
//     console.log(maxRef.current.value)
//   }

//   return (
//     <div className="Reviews">
//       <div className="container">
//         <h1>Local Discovery For You</h1>
//         <p>
//         Discover your premier service
//         </p>
//         <div className="menu">
//           <div className="left">
//               </div>
//           <div className="right">
//             <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
//             {open && (
//               <div className="rightMenu">
//                 {sort === "sales" ? (
//                   <span onClick={() => reSort("createdAt")}>Newest</span>
//                 ) : (
//                   <span onClick={() => reSort("sales")}>Best Selling</span>
//                   )}
//                   <span onClick={() => reSort("sales")}>Popular</span>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="cards">
//           {Reviews.map((gig) => (
//             <ReviewCard key={gig.id} item={gig} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;