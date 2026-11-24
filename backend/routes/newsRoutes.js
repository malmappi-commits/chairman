import confirmAdmin from "../middleware/authMiddleware.js";
import { authorizeAdmin } from "../middleware/authMiddleware.js";

import { createNews } from "../controller/newsController.js";
import { getNews } from "../controller/newsController.js";
import express from "express";
const newsRouter = express.Router();
newsRouter.post("/post", confirmAdmin, authorizeAdmin, createNews);
newsRouter.get("/get", getNews);
export default newsRouter;
