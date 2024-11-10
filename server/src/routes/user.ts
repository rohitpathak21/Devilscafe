import express from "express";
import { newUser, getAllUsers  } from "../controllers/user.js";
import { Router } from "express";

const app = Router();

app.get("/all", getAllUsers);
app.post("/new",newUser);




export default app;
