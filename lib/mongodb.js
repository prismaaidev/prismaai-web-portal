import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/blog";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(MONGODB_URI);
};