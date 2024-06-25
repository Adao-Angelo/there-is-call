import { prismaClient } from "../../../config/prisma";
import { I_user, I_user_repository } from "./I_user_repository";

class User_repository implements I_user_repository {
  async list_users(): Promise<I_user[]> {
    throw new Error("Method not implemented.");
  }
  async create_user(user: any): Promise<void> {
    await prismaClient.user.create({
      data: user,
    });
  }

  async findByEmail(email: string): Promise<any> {
    return await prismaClient.user.findFirst({
      where: { email: email },
    });
  }

  async remove(id: string): Promise<any> {
    await prismaClient.user.delete({
      where: { id: id },
    });
  }

  async list() {
    return prismaClient.user.findMany();
  }

  async listUserById(userId: string): Promise<any> {
    return await prismaClient.user.findFirst({
      where: { id: userId },
    });
  }
}

export { User_repository };
