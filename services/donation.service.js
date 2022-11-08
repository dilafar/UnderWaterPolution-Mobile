import {
  saveDonation,
  updateDonation,
  deleteDonation,
  getDonation,
  getDonationByUserId,
  getDonationById,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveDonationService = async (data, userId) => {
  const { amount, description, confirmed } = data;
  try {
    const donation = await saveDonation({
      userId,
      amount,
      description,
      confirmed,
    });
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateDonationService = async (id, data) => {
  try {
    const donation = await updateDonation(id, data);
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteDonationService = async (id) => {
  try {
    const donation = await deleteDonation(id);
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getDonationService = async () => {
  try {
    const donation = await getDonation();
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getDonationByUserIdService = async (id) => {
  try {
    const donation = await getDonationByUserId(id);
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getDonationByIdService = async (id) => {
  try{
    const donation = await getDonationById(id);
    return Promise.resolve(donation);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
}