
import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import Swal from "sweetalert";

function Login() {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res =  await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
      Swal("Good job!", "You Have Successfully Login!", "success");
    } catch (err) {
      setError(err.response.data);
      Swal( "You Have Entered wrong data!", "please enter again","error");
      console.log("hi")
      
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
       <div>
        <table>
          <td> <p>don't have an account?</p></td>
          <td><Link className="abdu" to="/register">`  Register now</Link></td>
        </table>
       </div>
        {/* {error && error} */}
      </form>
      
    </div>
    
  );
}

export default Login;


   