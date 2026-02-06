import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      requird: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
