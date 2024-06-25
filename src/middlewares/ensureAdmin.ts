import { NextFunction, Request, Response } from "express";
import { User_repository as UserRepository } from "../modules/users_modules/repositories/user_repository";
import { AppError } from "../errors/appErrors";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const userRepository = new UserRepository();
  const user = await userRepository.listUserById(id);
  if (!user.admin || user.admin == "0") {
    throw new AppError("User is not Admin!");
  }

  return next();
}
