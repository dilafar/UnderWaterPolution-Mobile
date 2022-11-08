import {
  saveLocation,
  updateLocation,
  deleteLocation,
  getLocation,
  getLocationByUserId,
  getLocationById,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveLocationService = async (data, userId) => {
  const { title, address, location, description, interested, imageURL } = data;
  try {
    const loc = await saveLocation({
      title,
      address,
      location,
      description,
      interested,
      imageURL,
      userId,
    });
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateLocationService = async (id, data) => {
  try {
    const loc = await updateLocation(id, data);
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteLocationService = async (id) => {
  try {
    const loc = await deleteLocation(id);
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getLocationService = async () => {
  try {
    const loc = await getLocation();
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getLocationByUserIdService = async (id) => {
  try {
    const loc = await getLocationByUserId(id);
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getLocationByIdService = async (id) => {
  try {
    const loc = await getLocationById(id);
    return Promise.resolve(loc);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
