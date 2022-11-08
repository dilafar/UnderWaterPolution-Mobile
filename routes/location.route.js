import express from "express";
import {
  saveLocationController,
  updateLocationController,
  deleteLocationController,
  getLocationController,
  getLocationByUserIdController,
  getLocationByIdController,
} from "../controllers/index.js";

const locationRouter = express.Router();

locationRouter.post("/", saveLocationController);
locationRouter.delete("/:id", deleteLocationController);
locationRouter.put("/:id", updateLocationController);
locationRouter.get("/manager", getLocationByUserIdController);
locationRouter.get("/:id", getLocationByIdController);
locationRouter.get("/", getLocationController);

export default eventRouter;
