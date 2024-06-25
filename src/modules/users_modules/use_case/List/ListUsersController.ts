import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUsersUseCase";

class ListUserController {
  constructor(private listUsersUseCase: ListUserUseCase) {}
  async handle(request: Request, response: Response) {
    const users = await this.listUsersUseCase.execute();
    return response.status(200).json(users);
  }
}
export { ListUserController };
