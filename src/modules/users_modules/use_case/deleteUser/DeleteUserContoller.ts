import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCasa";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    await this.deleteUserUseCase.execute({ id });
    return response.status(201).send();
  }
}

export { DeleteUserController };
