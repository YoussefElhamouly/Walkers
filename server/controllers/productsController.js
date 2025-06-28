import { throwError } from "../utils/helperFunction.js";
import Products from "../models/productsSchema.js";
import { __uploads } from "../config.js";
import fs from "fs/promises";
import path from "path";
import Reviews from "../models/reviewsSchema.js";
import mongoose from "mongoose";

const getProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      brand,
      rating,
      condition,
      sort,
      minPrice,
      maxPrice,
    } = req.query;

    const filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (brand && brand !== "All") {
      filter.brand = brand;
    }

    if (rating) {
      filter.rating = { $gte: parseInt(rating) };
    }

    if (condition) {
      filter.condition = condition;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    // Build sort object
    let sortOption = {};
    switch (sort) {
      case "price-asc":
        sortOption = { price: 1 };
        break;
      case "price-desc":
        sortOption = { price: -1 };
        break;
      case "newest":
        sortOption = { createdAt: -1 };
        break;
      case "best-rated":
        sortOption = { rating: -1 };
        break;
      default:
        sortOption = { createdAt: -1 };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Products.countDocuments(filter);
    const products = await Products.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    res.status(200).json({
      products,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id).lean();
    if (!product) {
      throwError("Product not found", 404);
    }

    const reviewsAgg = await Reviews.aggregate([
      { $match: { product_id: new mongoose.Types.ObjectId(id) } },
      {
        $facet: {
          totalCount: [{ $count: "count" }],
          reviews: [
            { $sort: { createdAt: -1 } },
            { $limit: 6 },
            {
              $lookup: {
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "user",
              },
            },
            { $unwind: "$user" },
            {
              $project: {
                comment: 1,
                rating: 1,
                createdAt: 1,
                user: {
                  username: "$user.username",
                  firstName: "$user.firstName",
                  lastName: "$user.lastName",
                },
              },
            },
          ],
        },
      },
      {
        $project: {
          total: { $ifNull: [{ $arrayElemAt: ["$totalCount.count", 0] }, 0] },
          reviews: 1,
        },
      },
    ]);

    const reviews = reviewsAgg[0] || { total: 0, reviews: [] };

    res.status(200).json({
      ...product,
      reviews,
    });
  } catch (err) {
    next(err);
  }
};

const getOnSaleProducts = async (req, res, next) => {
  try {
    const products = await Products.find({ discount: { $gt: 0 } })
      .sort({ discount: -1 })
      .limit(4)
      .lean();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getNewProducts = async (req, res, next) => {
  try {
    const products = await Products.find()
      .sort({ createdAt: -1 })
      .limit(4)
      .lean();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const loadImage = async (req, res, next) => {
  try {
    const { id, image } = req.params;
    const product = await Products.findById(id);
    if (!product) {
      throwError("Product not found", 404);
    }
    const imagePath = path.join(__uploads, "products", id, image);

    try {
      await fs.access(imagePath);
      return res.sendFile(imagePath);
    } catch (error) {
      throwError("Image not found", 404);
    }
  } catch (err) {
    next(err);
  }
};

export {
  getProducts,
  loadImage,
  getProductById,
  getOnSaleProducts,
  getNewProducts,
};
