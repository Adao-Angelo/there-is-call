import Express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { config } from "dotenv";
import { AppError } from "./errors/appErrors";
import { router } from "./routes";

const app = Express();
app.use(Express.json());
app.use(router);

config();

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server Error - ${err.message}`,
    });
  }
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});