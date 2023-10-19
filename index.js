import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./Routes/userRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

//connection to db
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

//routing
app.use("/api/v1", route);

// connect server
app.listen(port, () => {
  console.log("server running at port 8000");
});
