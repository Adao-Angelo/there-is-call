import { AppError } from "../../../../../../errors/AppErrror";
import { getRedis } from "../../../../../../redisConfig";
import User from "../../../model/user";
import { UserRepository } from "../../../repositories/UserRepository";

class ListUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(id): Promise<User> {
    console.time()
   
    const user = await this.userRepository.listUserById(id);
    if (!user) {
      throw new AppError("user Not Find");
    }
    console.timeEnd()
    return user;
    
  }
}

export { ListUserByIdUseCase };
