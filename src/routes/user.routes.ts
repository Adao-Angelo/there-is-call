import { Router } from "express";
import { create_user_controller } from "../modules/users_modules/use_case/create_user";

const user_routes = Router();

user_routes.get("/", async (request, response) => {
  response.json({ message: "get user routes" });
});
user_routes.post("/", async (request, response) => {
  await create_user_controller.handle(request, response);
});

export { user_routes };
