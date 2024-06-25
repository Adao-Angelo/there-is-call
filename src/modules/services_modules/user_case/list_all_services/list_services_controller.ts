import { Request, Response } from "express";
import { ListServiceUserCase } from "./list_services_use_case";

class ListServiceController {
  constructor(private listServiceUseCase: ListServiceUserCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const services = await this.listServiceUseCase.execute();
    return response.status(200).json(services);
  }
}

export { ListServiceController };
