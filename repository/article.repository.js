import { Article } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveArticle = (data) =>
  Article.create(data)
    .then((article) => {
      return Promise.resolve(article);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateArticle = (id, data) =>
  Article.findByIdAndUpdate(id, data, { new: true })
    .then((article) => {
      if (!article) {
        throw new AppError("Event Not Found", 404);
      }
      return Promise.resolve(article);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteArticle = (id) =>
  Article.findByIdAndDelete(id)
    .then((article) => {
      if (!article) {
        throw new AppError("Event Not Found", 404);
      }
      return Promise.resolve(article);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getArticles = () =>
  Article.find()
    .then((articles) => {
      return Promise.resolve(articles);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getApprovedArticles = () =>
  Article.find({ status: "Approved" })
    .then((articles) => {
      return Promise.resolve(articles);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getPendingArticles = () =>
  Article.find({ status: "Pending" })
    .then((articles) => {
      return Promise.resolve(articles);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getArticlesforMarine = () =>
  Article.find({
    $or: [
      {
        status: "Pending",
      },
      {
        status: "Rejected",
      },
    ],
  })
    .then((articles) => {
      return Promise.resolve(articles);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
