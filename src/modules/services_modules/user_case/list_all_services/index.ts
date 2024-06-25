import { Service_repository } from "../../repositories/service_repository";
import { ListServiceController } from "./list_services_controller";
import { ListServiceUserCase } from "./list_services_use_case";

const service_repository = new Service_repository();
const listServicesUseCase = new ListServiceUserCase(service_repository);
const listServiceController = new ListServiceController(listServicesUseCase);

export { listServiceController };
