import mongoose from "mongoose";

const { Schema } = mongoose;

const LocationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    interested: {
      type: String,
      defaultValue: 0,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  },
);

export const Location = mongoose.model("Location", LocationSchema);
