import { Schema, model } from "mongoose";

// Metadata schema for image dimensions
const metadataSchema = new Schema(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { _id: false }
);

// Image schema

// Color images schema
const imagesSchema = new Schema(
  {
    variant: { type: String, required: true },
    images: {
      type: [
        new Schema(
          {
            fileName: { type: String, required: true },
            metadata: { type: metadataSchema, required: true },
          },
          { _id: false }
        ),
      ],
      required: true,
    },
  },
  { _id: false }
);

// Main product schema
const productsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  rating: { type: Number, required: true, min: 0, max: 5 },
  discount: { type: Number, required: true, min: 0, max: 100 },

  category: { type: String, required: true },
  brand: { type: String, required: true },
  sizes: { type: [String], required: true },

  gallery: {
    type: [imagesSchema],
    required: true,
  },

  createdAt: { type: Date, default: Date.now },
  stock: { type: Number, required: true },

  isFeatured: { type: Boolean, default: false, required: true },
  isTrending: { type: Boolean, default: false, required: true },
  isArchived: { type: Boolean, default: false, required: true },
});

// Model export
const Products = model("Products", productsSchema);
export default Products;
