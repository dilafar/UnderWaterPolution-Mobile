import { Donation } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveDonation = (data) =>
  Donation.create(data)
    .then((donation) => {
      return Promise.resolve(donation);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateDonation = (id, data) =>
  Donation.findByIdAndUpdate(id, data, { new: true })
    .then((donation) => {
      if (!donation) {
        throw new AppError("Donation Not Found", 404);
      }
      return Promise.resolve(donation);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteDonation = (id) =>
  Donation.findByIdAndDelete(id)
    .then((donation) => {
      if (!donation) {
        throw new AppError("Donation Not Found", 404);
      }
      return Promise.resolve(donation);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getDonation = () =>
  Donation.find()
    .then((donation) => {
      return Promise.resolve(donation);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getDonationByUserId = (userId) =>
  Donation.find(userId)
    .then((donation) => {
      if (!donation) {
        throw new AppError("Donation Details not Found", 404);
      }
      return Promise.resolve(donation);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getDonationById = (id) =>
  Donation.findOne({ _id: id })
    .then((donation) => {
      if (!donation) {
        throw new AppError("Donation Details not Found", 404);
      }
      return Promise.resolve(donation);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });