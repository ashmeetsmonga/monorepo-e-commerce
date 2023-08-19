import CustomError from "./CustomError";

class ZodError extends CustomError {
  statusCode: number;
  constructor(msg: string) {
    super(msg);
    this.statusCode = 403;
  }
}

export default ZodError;
