import { prismaClient } from "../../../config/prisma";
import { I_service } from "../model/service";
import { I_service_repository } from "./I_service_repository";

class Service_repository implements I_service_repository {
  list_services(): Promise<I_service[]> {
    throw new Error("Method not implemented.");
  }
  async create_service(service: any): Promise<void> {
    await prismaClient.service.create({
      data: service,
    });
  }

  list_services_by_name(): Promise<[]> {
    throw new Error("Method not implemented.");
  }
}

export { Service_repository };
