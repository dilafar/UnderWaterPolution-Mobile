import {
  saveEventService,
  updateEventService,
  deleteEventService,
  getEventsService,
  getPendingEventsService,
  getApprovedEventsService,
  getEventsforVolunteersService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveEventController = async (req, res) => {
  try {
    const event = await saveEventService(req.body);
    res.json(Success(event, " Successfully Event Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateEventController = async (req, res) => {
  try {
    const event = await updateEventService(req.params.id, req.body);
    res.json(Success(event, "Successfully Event Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteEventController = async (req, res) => {
  try {
    const event = await deleteEventService(req.params.id);
    res.json(Success(event, "Successfully Event Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getEventsController = async (req, res) => {
  try {
    const events = await getEventsService();
    res.json(Success(events, "Successfully Fetched Events Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPendingEventsController = async (req, res) => {
  try {
    const events = await getPendingEventsService();
    res.json(Success(events, "Successfully Fetched Events Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getApprovedEventsController = async (req, res) => {
  try {
    const events = await getApprovedEventsService();
    res.json(Success(events, "Successfully Fetched Events Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getEventsforVolunteersController = async (req, res) => {
  try {
    const events = await getEventsforVolunteersService();
    res.json(Success(events, "Successfully Fetched Events Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
