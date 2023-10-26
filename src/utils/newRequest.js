import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:3300/api/",
  withCredentials: true,
});

export default newRequest;