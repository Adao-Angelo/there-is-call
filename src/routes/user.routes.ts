import { Router } from "express";
import { create_user_controller } from "../modules/users_modules/use_case/create_user";
import { listUserController } from "../modules/users_modules/use_case/List/Index";
import { deleteUserController } from "../modules/users_modules/use_case/deleteUser/Index";

const user_routes = Router();

user_routes.get("/", async (request, response) => {
  await listUserController.handle(request, response);
});
user_routes.post("/", async (request, response) => {
  await create_user_controller.handle(request, response);
});

user_routes.delete("/", async (request, response) => {
  await deleteUserController.handle(request, response);
});

export { user_routes };
