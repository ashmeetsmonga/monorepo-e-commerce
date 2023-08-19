import { connectDB } from "./db/connectDb";

import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./routes/productRoutes";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware";

export const createServer = () => {
  const app = express();
  connectDB(process.env.DATABASE_URL!);
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors());

  app.use("/api/product", productRouter);

  app.use(errorHandlerMiddleware);
  return app;
};
