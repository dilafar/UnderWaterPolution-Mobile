import { Event } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveEvent = (data) =>
  Event.create(data)
    .then((event) => {
      return Promise.resolve(event);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateEvent = (id, data) =>
  Event.findByIdAndUpdate(id, data, { new: true })
    .then((event) => {
      if (!event) {
        throw new AppError("Event Not Found", 404);
      }
      return Promise.resolve(event);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteEvent = (id) =>
  Event.findByIdAndDelete(id)
    .then((event) => {
      if (!event) {
        throw new AppError("Event Not Found", 404);
      }
      return Promise.resolve(event);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getEvents = () =>
  Event.find()
    .then((events) => {
      return Promise.resolve(events);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
