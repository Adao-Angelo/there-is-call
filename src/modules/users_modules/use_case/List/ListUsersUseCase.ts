import { User_repository as UserRepository } from "../../repositories/user_repository";

class ListUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute() {
    return await this.userRepository.list();
  }
}

export { ListUserUseCase };
