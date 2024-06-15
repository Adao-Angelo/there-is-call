import { User_repository } from "../../repositories/user_repository";
import { Create_user_controller } from "./create_user_controller";
import { Create_user_use_case } from "./create_user_use_case";

const user_repository = new User_repository();
const create_user_use_case = new Create_user_use_case(user_repository);
const create_user_controller = new Create_user_controller(create_user_use_case);

export { create_user_controller };
