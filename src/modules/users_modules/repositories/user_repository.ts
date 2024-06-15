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
}

export { User_repository };
