import { User_repository as UserRepository } from "../../repositories/user_repository";
import { ListUserController } from "./ListUsersController";
import { ListUserUseCase } from "./ListUsersUseCase";

const userRepository = new UserRepository();

const listUsersUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUsersUseCase);

export { listUserController };
