import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Products",
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", reviewSchema);
export default Reviews;
