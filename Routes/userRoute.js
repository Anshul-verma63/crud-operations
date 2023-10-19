import express from "express";
import {
  createUser,
  deleteUserController,
  fetchUserController,
  updateUserController,
} from "../Controllers/userController.js";

const route = express.Router();

//create user
route.post("/create", createUser);
//fetch api
route.get("/fetch", fetchUserController);
//update user
route.put("/update/:id", updateUserController);
//delete user
route.delete("/delete/:id", deleteUserController);

export default route;
