import express from "express";
import userRoute from './routes/user.js';
import { connectDB } from "./utils/features.js";
connectDB();
const port = 8800;
const app = express();
app.use(express.json());
app.get("/", (req, res) => { res.send("api working"); });
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});