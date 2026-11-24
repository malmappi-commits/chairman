import express from "express";
import { connectDB } from "./configs/db.js";
const app = express();
import router from "./routes/authRoutes.js";
import newsRouter from "./routes/newsRoutes.js";
app.use(express.json());
const startServer = async () => {
  await connectDB();
  app.get("/", (req, res) => {
    res.json("chairmans office api is working");
  });
  app.use("/api/auth", router);
  app.use("/api/news", newsRouter);
  app.listen(2000, () => {
    console.log("server is listening on port 2000");
  });
};
startServer();
