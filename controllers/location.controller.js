import {
  saveLocationService,
  updateLocationService,
  deleteLocationService,
  getLocationService,
  getLocationByUserIdService,
  getLocationByIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveLocationController = async (req, res) => {
  try {
    const userId = req.user._id;
    const location = await saveLocationService(req.body, userId);
    res.json(Success(location, "Location Added Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateLocationController = async (req, res) => {
  try {
    const location = await updateLocationService(req.params.id, req.body);
    res.json(Success(location, "Location Updated Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteLocationController = async (req, res) => {
  try {
    const location = await deleteLocationService(req.params.id);
    res.json(Success(location, "Location Deleted Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getLocationController = async (req, res) => {
  try {
    const location = await getLocationService();
    res.json(Success(location, "Location Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getLocationByUserIdController = async (req, res) => {
  try {
    const userId = req.user._id;
    const location = await getLocationByUserIdService(userId);
    res.json(Success(location, "Location Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getLocationByIdController = async (req, res) => {
  try {
    const location = await getLocationByIdService(req.params.id);
    res.json(Success(location, "Location Details Fetched Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

