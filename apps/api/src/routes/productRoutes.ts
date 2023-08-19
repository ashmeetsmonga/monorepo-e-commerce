import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);

export default productRouter;
