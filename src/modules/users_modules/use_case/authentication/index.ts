import { User_repository } from "../../repositories/user_repository";
import { AuthenticateUserController } from "./auth_controller";
import { AuthenticateUserUseCase } from "./auth_useCase";

const user_repository = new User_repository();

const authenticateUserUseCase = new AuthenticateUserUseCase(user_repository);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
