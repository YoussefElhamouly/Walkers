import mongoose from "mongoose";
let cachedConnection = null;
const MONGODB_URI = process.env.MONGODB_URI || "";
const connectDB = async () => {
  if (cachedConnection) return cachedConnection;
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    cachedConnection = conn;

    return conn;
  } catch (err) {
    console.error(" MongoDB connection error:", err);
  }
};

export { connectDB, MONGODB_URI };
