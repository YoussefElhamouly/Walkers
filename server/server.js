import express from "express";
import { connectDB } from "./utils/connectDb.js";
import productsRoutes from "./routes/products.js";
import { handleErrors } from "./middlewares/errorHandler.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
