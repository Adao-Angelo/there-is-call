import { Router } from "express";
import { authenticateUserController } from "../modules/users_modules/use_case/authentication";

const authenticationRoutes = Router();

authenticationRoutes.post("/", async (request, response) => {
  await authenticateUserController.handle(request, response);
});

export { authenticationRoutes };
