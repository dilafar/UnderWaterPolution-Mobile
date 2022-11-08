import {
  saveEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getPendingEvents,
  getApprovedEvents,
  getEventsforVolunteers,
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

export const getPendingEventsService = async () => {
  try {
    const events = await getPendingEvents();
    return Promise.resolve(events);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getApprovedEventsService = async () => {
  try {
    const events = await getApprovedEvents();
    return Promise.resolve(events);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getEventsforVolunteersService = async () => {
  try {
    const events = await getEventsforVolunteers();
    return Promise.resolve(events);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
