import { Location } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveLocation = (data) =>
  Location.create(data)
    .then((location) => {
      return Promise.resolve(location);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateLocation = (id, data) =>
  Location.findByIdAndUpdate(id, data, { new: true })
    .then((location) => {
      if (!location) {
        throw new AppError("Location Not Found", 404);
      }
      return Promise.resolve(location);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteLocation = (id) =>
  Location.findByIdAndDelete(id)
    .then((location) => {
      if (!location) {
        throw new AppError("Location Not Found", 404);
      }
      return Promise.resolve(location);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getLocation = () =>
  Location.find()
    .then((location) => {
      return Promise.resolve(location);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getLocationByUserId = (userId) =>
  Location.find(userId)
    .then((location) => {
      if (!location) {
        throw new AppError("Location Details not Found", 404);
      }
      return Promise.resolve(location);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getLocationById = (id) =>
  Location.findOne({ _id: id })
    .then((location) => {
      if (!location) {
        throw new AppError("Location Details not Found", 404);
      }
      return Promise.resolve(location);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });