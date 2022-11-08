import mongoose from "mongoose";

const { Schema } = mongoose;

const DonationSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    confirmed: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Donation = mongoose.model("Donation", DonationSchema);
