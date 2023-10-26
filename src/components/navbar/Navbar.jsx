// ;
// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Navbar.scss";
// import newRequest from "../../utils/newRequest";

// function Navbar() {
//   const [active, setActive] = useState(false);
//   const [open, setOpen] = useState(false);

//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scrollY > 0 ? setActive(true) : setActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

 
//   // const currentUser = null
// const navigate = useNavigate();
//   // const currentUser = JSON.parse(localStorage.getItem("currenUser"));
//   const currentUser = {
//     id: 1,
//     username: "Abdulsemed",
//     isSeller: true,
//   };
//   const handlelogout = async () =>{
//     try{
// await newRequest.post("/auth/logout");
// localStorage.setItem("currentUser",null);
// navigate("/")
//     }catch(err){
//       console.log(err);
//     }
//   }
//   return (
//     <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//       <div className="container">
//         <div className="logo">
//           <Link className="link" to="/">
//             <div className="logos">
//             <img
//                 src="../../public/img/HI_Logo-removebg-preview.png"
//                 alt=""
//                 className="he"
//               />
            
//             <span className="text">HabeshaInsights </span>
//             </div>
//           </Link>
//         </div>
//         <div className="links">
//           <span></span>
//           <span></span>

//           <Link className="link" to="/login">
//                 <button>sing in</button>
//               </Link>
//           <Link className="link" to="/register">
//                 <button>singup</button>
//               </Link>
//           {!currentUser?.isSeller && <span>Become a Seller</span>}
//           {currentUser ? (
//             <div className="user" onClick={()=>setOpen(!open)}>
//               <img
//                 src="../../public/img/Haile-resort-hawassa.jpg"
//                 alt=""
//               />
//               <span>{currentUser?.username}</span>
//               {open && <div className="options">
//                 {currentUser.isSeller && (
//                   <>
//                     <Link className="link" to="/mygigs">
//                       review
//                     </Link>
//                     <Link className="link" to="/writeReviews">
//                       Add New business
//                     </Link>
//                     <Link className="link" to ="writeReviewss">
          
//                  <span>WriteReview</span>
//                     </Link>
//                   </>
//                 )}
//                 <Link className="link" to="/orders">
//                   {/* Orders */}
//                 </Link>
//                 <Link className="link" to="/messages">
//                   Messages
//                 </Link>
//                 <Link className="link" to="/">
//                   Logout
//                 </Link>
//               </div>}
//             </div>
//           )
//           : (
//             <>
            
//               <Link className="link" to="/register">
               
//               </Link>
//             </>
//           )}
         
//         </div>
//       </div>
//       {(active || pathname !== "/") && (
//         <>
//           <hr />
//           <div className="menu">
//             <Link className="link " to="/coffee">
//              Coffee
//             </Link>
//             <Link className="link " to="/hotel">
//              Hotel
//             </Link>
//             <Link className="link " to="/restuarante">
//              Resturant
//             </Link>
//             <Link className="link" to="/gas">
//            Gas
//             </Link>
//             <Link className="link menuLink" to="/digitalMarketing">
//               Digital Marketing
//             </Link>
           
//           </div>
//           <hr />
//         </>
//       )}
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const navigate = useNavigate();
  const handleLogout = async ()=>{
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

 

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
      <div className="logo">
          <Link className="link" to="/">
            <div className="logos">
            <img
                src="../../public/img/HI_Logo-removebg-preview.png"
                alt=""
                className="he"
             />
            
            <span className="text">HabeshaInsights </span>
             </div>
          </Link>
        </div>
        <div className="links">
          
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={currentUser.profilePicture||"/public/img/man.jpg"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/writeReviewss">
                     writeReviews
                    </Link>
                    <Link className="link" to="/writeReviews">
                      Add New business
                    </Link>
                  </>
                )}
                 <Link className="link" to="/writeReviewss">
                    writeReviews
                    </Link>
                    <Link className="link" to="/writeReviews">
                      Add New business
                    </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link className="link" to="/login">
                <button>Sign in</button>
              </Link>
              <Link className="link" to="/register">
                <button>Sing up</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
           <Link className="link " to="/coffee">
             Coffee
            </Link>
            <Link className="link " to="/hotel">
             Hotel
           </Link>
           <Link className="link " to="/restuarante">
            Resturant
            </Link>
            <Link className="link" to="/gas">
            Gas
           </Link>
          <Link className="link menuLink" to="/digitalMarketing">
               Digital Marketing
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
