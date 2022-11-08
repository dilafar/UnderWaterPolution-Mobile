import {
  saveEvent,
  updateEvent,
  deleteEvent,
  getEvents,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveEventService = async (data) => {
  const {
    title,
    description,
    date,
    startTime,
    endTime,
    tag,
    venue,
    image,
    status,
  } = data;
  try {
    const event = await saveEvent({
      title,
      description,
      date,
      startTime,
      endTime,
      tag,
      venue,
      image,
      status,
      rejectNote: "Reject Note",
    });
    return Promise.resolve(event);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateEventService = async (id, data) => {
  try {
    const event = await updateEvent(id, data);
    return Promise.resolve(event);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteEventService = async (id) => {
  try {
    const event = await deleteEvent(id);
    return Promise.resolve(event);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getEventsService = async () => {
  try {
    const events = await getEvents();
    return Promise.resolve(events);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
