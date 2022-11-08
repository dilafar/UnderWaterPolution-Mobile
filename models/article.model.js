import mongoose from "mongoose";

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },

    tag: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    rejectNote: {
      type: String,
      default: "Reject Note",
    },
  },
  { versionKey: false },
);

export const Article = mongoose.model("Article", ArticleSchema);
