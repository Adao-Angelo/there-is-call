import { prismaClient } from "../../../config/prisma";
import { I_service } from "../model/service";
import { I_service_repository } from "./I_service_repository";

class Service_repository implements I_service_repository {
  list_services(): Promise<I_service[]> {
    return prismaClient.service.findMany();
  }
  async create_service(service: any): Promise<void> {
    await prismaClient.service.create({
      data: service,
    });
  }

  async list_services_by_name(title: string): Promise<any[]> {
    return await prismaClient.service.findMany({
      where: { title: title },
    });
  }
}

export { Service_repository };
