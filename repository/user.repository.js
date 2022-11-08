import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = (data) =>
  User.create(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const loginUser = (userName) =>
  User.findOne({ userName })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getUser = (data) =>
  User.findOne(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllUsers = () =>
  User.find()
    .select("-password")
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateUser = (userId, data) =>
  User.findByIdAndUpdate(userId, data, { new: true })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteUser = (data) =>
  User.findByIdAndRemove(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
