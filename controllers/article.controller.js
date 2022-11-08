import {
  saveArticleService,
  updateArticleService,
  deleteArticleService,
  getArticleService,
  getPendingArticlesService,
  getApprovedArticleService,
  getArticlesforMarineService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveArticleController = async (req, res) => {
  try {
    const article = await saveArticleService(req.body);
    res.json(Success(article, " Successfully Article Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateArticleController = async (req, res) => {
  try {
    const article = await updateArticleService(req.params.id, req.body);
    res.json(Success(article, "Successfully Article Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteArticleController = async (req, res) => {
  try {
    const article = await deleteArticleService(req.params.id);
    res.json(Success(article, "Successfully Article Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getArticlesController = async (req, res) => {
  try {
    const articles = await getArticleService();
    res.json(Success(articles, "Successfully Fetched Articles Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPendingArticleController = async (req, res) => {
  try {
    const articles = await getPendingArticlesService();
    res.json(Success(articles, "Successfully Fetched Articles Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getApprovedArticleController = async (req, res) => {
  try {
    const articles = await getApprovedArticleService();
    res.json(Success(articles, "Successfully Fetched Articles Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getArticlesforMarineController = async (req, res) => {
  try {
    const articles = await getArticlesforMarineService();
    res.json(Success(articles, "Successfully Fetched Events Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
