import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";

export const errorHandlerMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ msg: err.message });
  }
};
