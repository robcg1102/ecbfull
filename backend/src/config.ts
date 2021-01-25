import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_URI,
  PORT: process.env.PORT || 4000
};