class CustomError extends Error {
  statusCode: number;
  constructor(msg: any) {
    super(msg);
    this.statusCode = 500;
  }
}

export default CustomError;
