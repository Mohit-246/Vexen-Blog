import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamp: true },
);

export default mongoose.models.Review ||
  mongoose.model("Review", reviewSchema);
