import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User_repository as UserRepository } from "../modules/users_modules/repositories/user_repository";
import { AppError } from "../errors/appErrors";

interface IPayLoad {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "there_is_call") as IPayLoad;

    const userRepository = new UserRepository();
    const user = userRepository.listUserById(userId);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
    request.user = {
      id: userId,
    };
    next();
  } catch {
    throw new AppError("Invalid Token", 401);
  }
}
