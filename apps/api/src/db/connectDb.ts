const mongoose = require("mongoose");

export const connectDB = async (MONGO_URI: string) => {
  await mongoose.connect(MONGO_URI);
  console.log("DB Connected");
};
