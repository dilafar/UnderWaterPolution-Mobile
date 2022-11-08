import {
  saveArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getApprovedArticles,
  getPendingArticles,
  getArticlesforMarine,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveArticleService = async (data) => {
  const { title, description, date, tag, venue, image, status } = data;
  try {
    const article = await saveArticle({
      title,
      description,
      date,
      tag,
      venue,
      image,
      status,
      rejectNote: "Reject Note",
    });
    return Promise.resolve(article);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateArticleService = async (id, data) => {
  try {
    const article = await updateArticle(id, data);
    return Promise.resolve(article);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteArticleService = async (id) => {
  try {
    const article = await deleteArticle(id);
    return Promise.resolve(article);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getArticleService = async () => {
  try {
    const articles = await getArticles();
    return Promise.resolve(articles);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPendingArticlesService = async () => {
  try {
    const articles = await getPendingArticles();
    return Promise.resolve(articles);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getApprovedArticleService = async () => {
  try {
    const articles = await getApprovedArticles();
    return Promise.resolve(articles);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getArticlesforMarineService = async () => {
  try {
    const articles = await getArticlesforMarine();
    return Promise.resolve(articles);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
