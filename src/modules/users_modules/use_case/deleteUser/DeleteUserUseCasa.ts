import { threadId } from "worker_threads";
import { AppError } from "../../../../errors/appErrors";
import { User_repository as UserRepository } from "../../repositories/user_repository";

interface IRequest {
  id: string;
}
class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ id }: IRequest): Promise<void> {
    const user = await this.userRepository.listUserById(id);
    if (!user) {
      throw new AppError("The user does not exists");
    }
    await this.userRepository.remove(id);
  }
}

export { DeleteUserUseCase };
