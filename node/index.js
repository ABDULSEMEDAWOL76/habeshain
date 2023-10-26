import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import bizRoute from "./routes/business.route.js";

import reviewRoute from "./routes/review.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


dotenv.config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Successfully Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/biz", bizRoute);
app.use("/api/reviews", reviewRoute);

//An express middleware function to output the error status and error message, or a "An Error has occured" message, if error status and error message is not available.  
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Unexpected error has occurred" + err.stack;
  
  console.log("#################")
  console.log(err.message)
  console.log("#################")

  return res.status(errorStatus).send(errorMessage + `\n\nAn Error has Occurred. ` + `\n\nHere is the error stack: `+ err.stack);
});

app.listen(3300, () => {
  connect();
  console.log("Backend server is running!");
});