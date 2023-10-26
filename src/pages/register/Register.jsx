// import React, { useState } from "react";
// import upload from "../../utils/upload";
// import "./Register.scss";
// import newRequest from "../../utils/newRequest";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert";





// function Register() {
//   const [file, setFile] = useState(null);
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     occupation: "",
//     address:"",

//     // isBusinessOwner: false
    
//   });
//   console.log(user);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleSeller = (e) => {
//     setUser((prev) => {
//       return { ...prev, isSeller: e.target.checked };
//     }
//     );
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = await upload(file);
//     try {
//       await newRequest.post("/auth/register", {
//         ...user,
//         img: url,
//       });
//       navigate("/login")
//       Swal("Good job!", "You Have Successfully Registerd!", "success");
//     } catch (err) {
//       console.log(err);
//       console.log("error hapend");
//       Swal( "You Have Entered wrong data!", "please enter again","error");
     
//     }
//   };
  
//   return (
//     <div className="register">
//       <form onSubmit={handleSubmit} >
//         <div className="left">
//           <h1>Create a new account</h1>
//           <label htmlFor="">Username</label>
//           <input
//             name="username"
//             type="text"
//             placeholder="Username"
//             onChange={handleChange}
//           />
//           <label htmlFor="">Email</label>
//           <input
//             name="email"
//             type="email"
//             placeholder="email"
//             onChange={handleChange}
//           />
//           <label htmlFor="">Password</label>
//           <input name="password" type="password" onChange={handleChange}/>
         
//           <label htmlFor="">occupation</label>
//           <input
//             name="occupation"
//             type="text"
//             placeholder="student"
//             onChange={handleChange}
//           />
//           <label htmlFor="">Address</label>
//           <input
//             name="address"
//             type="text"
//             placeholder="ethiopia"
//             onChange={handleChange}
//           />
//           <button type="submit">Register</button>
//         </div>
       
        
//       </form>
      
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
// import illustration from "../../public/img/illustration-flowing-conversation.svg";
function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    occupation: "",
    address: "",
    profilePicture: "", // Add profilePicture field to the user state
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
    } else {
      setUser((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imgUrl = "";
    if (file) {
      imgUrl = await upload(file);
    }

    try {
      await newRequest.post("/auth/register", {
        ...user,
        profilePicture: imgUrl, // Pass the profile picture URL to the backend
      });

      navigate("/login");
      Swal("Good job!", "You have successfully registered!", "success");
    } catch (err) {
      console.log(err);
      console.log("error happened");
      Swal("You have entered wrong data!", "Please try again", "error");
    }
  };

  return (
    
    <div className="register">
      {/* <div class="mt-12 text-center">
        <img className="w-[24em] aspect-square" src={illustration} alt="Contact" />
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="occupation">Occupation</label>
          <input
            name="occupation"
            type="text"
            placeholder="Occupation"
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
          />
          {/* <label htmlFor="file">Profile Picture</label>
          <input name="file" type="file" onChange={handleChange} /> */}
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;