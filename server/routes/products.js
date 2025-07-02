import { Router } from "express";
import {
  getProducts,
  loadImage,
  getProductById,
  getNewProducts,
  getOnSaleProducts,
  getFeaturedProducts,
} from "../controllers/productsController.js";
const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/featured", getFeaturedProducts);
productsRouter.get("/on-sale", getOnSaleProducts);
productsRouter.get("/:id", getProductById);
productsRouter.get("/:id/loadImage/:image", loadImage);

export default productsRouter;
