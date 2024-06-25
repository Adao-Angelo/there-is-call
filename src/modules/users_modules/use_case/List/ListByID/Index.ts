
import { UserRepository } from "../../../repositories/UserRepository";
import { ListUserByIdController } from "./ListUserByIdController";
import { ListUserByIdUseCase } from "./ListUserByIdUseCase";



const userRepository = new UserRepository()
const listUserByIdUseCase  = new ListUserByIdUseCase(userRepository)
const listUserByIdController = new ListUserByIdController(listUserByIdUseCase)
export {listUserByIdController}