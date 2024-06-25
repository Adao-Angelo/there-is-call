import { User_repository as UserRepository } from "../../repositories/user_repository";
import { DeleteUserController } from "./DeleteUserContoller";
import { DeleteUserUseCase } from "./DeleteUserUseCasa";

const userRepository = new UserRepository();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
