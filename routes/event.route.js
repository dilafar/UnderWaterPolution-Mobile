import express from "express";
import {
  saveEventController,
  updateEventController,
  deleteEventController,
  getEventsController,
} from "../controllers/index.js";

const eventRouter = express.Router();

eventRouter.post("/", saveEventController);
eventRouter.delete("/:id", deleteEventController);
eventRouter.put("/:id", updateEventController);
eventRouter.get("/", getEventsController);

export default eventRouter;
