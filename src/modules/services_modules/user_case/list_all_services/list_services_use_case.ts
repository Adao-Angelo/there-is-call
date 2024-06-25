import { Service_repository } from "../../repositories/service_repository";

class ListServiceUserCase {
  constructor(private service_repository: Service_repository) {}
  async execute() {
    return this.service_repository.list_services();
  }
}

export { ListServiceUserCase };
