import {
  saveDonationService,
  updateDonationService,
  deleteDonationService,
  getDonationService,
  getDonationByIdService,
  getDonationByUserIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveDonationController = async (req, res) => {
  try {
    const userId = req.user._id;
    const donation = await saveDonationService(req.body, userId);
    res.json(Success(donation, "Donation Added Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateDonationController = async (req, res) => {
  try {
    const donation = await updateDonationService(req.params.id, req.body);
    res.json(Success(donation, "Donation Updated Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteDonationController = async (req, res) => {
  try {
    const donation = await deleteDonationService(req.params.id);
    res.json(Success(donation, "Donation Deleted Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getDonationController = async (req, res) => {
  try {
    const donation = await getDonationService();
    res.json(Success(donation, "Donation Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getDonationByIdController = async (req, res) => {
  try {
    const donation = await getDonationByIdService(req.params.id);
    res.json(Success(donation, "Donation Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getDonationByUserIdController = async (req, res) => {
  try {
    const userId = req.user._id;
    const location = await getDonationByUserIdService(userId);
    res.json(Success(location, "Location Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
