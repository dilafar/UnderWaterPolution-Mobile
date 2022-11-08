import express from "express";
import {
  saveArticleController,
  updateArticleController,
  deleteArticleController,
  getArticlesController,
  getApprovedArticleController,
  getPendingArticleController,
  getArticlesforMarineController,
} from "../controllers/index.js";

const articleRoute = express.Router();

articleRoute.post("/", saveArticleController);
articleRoute.delete("/:id", deleteArticleController);
articleRoute.put("/:id", updateArticleController);
articleRoute.get("/", getArticlesController);
articleRoute.get("/approve", getApprovedArticleController);
articleRoute.get("/pending", getPendingArticleController);
articleRoute.get("/marine", getArticlesforMarineController);

export default articleRoute;
