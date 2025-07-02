import express from "express";
import { connectDB } from "./utils/connectDb.js";
import productsRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import { handleErrors } from "./middlewares/errorHandler.js";
import session from "express-session";
import { RedisStore } from "connect-redis";
import passport from "./strategies/passport.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import redisClient from "./redis/redisClient.js";

const PORT = process.env.PORT || 5000;

const redisStore = new RedisStore({
  client: redisClient,
  prefix: "walker:",
});

connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Session configuration
app.use(
  session({
    store: redisStore,
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use(handleErrors);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
