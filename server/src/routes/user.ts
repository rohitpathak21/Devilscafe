import express, { Router } from "express";
import { newUser } from "../controllers/user.js";
import { getAllUsers } from "../controllers/user.js";

const app = express.Router();

app.get("/all", getAllUsers);
app.post("/new",newUser);




export default app;
