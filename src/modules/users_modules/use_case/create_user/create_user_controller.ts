import { Request, Response } from "express";
import { Create_user_use_case } from "./create_user_use_case";

class Create_user_controller {
  constructor(private create_user_use_case: Create_user_use_case) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      type_account,
      contact,
      status,
      latitude,
      longitude,
    } = request.body;
    const location = { latitude, longitude };
    await this.create_user_use_case.execute(
      {
        name,
        email,
        password,
        contact,
        type_account,
        status,
      },
      { latitude, longitude }
    );

    return response.status(201).json({ message: "created successfully" });
  }
}

export { Create_user_controller };
