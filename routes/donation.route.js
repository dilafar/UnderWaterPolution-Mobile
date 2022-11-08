import express from "express";
import {
  saveDonationController,
  updateDonationController,
  deleteDonationController,
  getDonationController,
  getDonationByIdController,
  getDonationByUserIdController,
} from "../controllers/index.js";

const donationRouter = express.Router();

donationRouter.post("/", saveDonationController);
donationRouter.delete("/:id", deleteDonationController);
donationRouter.put("/:id", updateDonationController);
donationRouter.get("/manager", getDonationByUserIdController);
donationRouter.get("/:id", getDonationByIdController);
donationRouter.get("/", getDonationController);

export default donationRouter;
