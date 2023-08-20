import { Request, Response } from "express";
import Product from "../db/models/Product";
import ZodError from "../errors/ZodError";
import { ProductSchema } from "../zodSchemas";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  return res.status(200).json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const result = ProductSchema.safeParse(req.body);
  if (!result.success) throw new ZodError("Zod validation failed");
  const product = await Product.create({ ...result.data });
  return res.status(200).json(product);
};

export const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findById({ _id: id });
  return res.status(200).json(product);
};
