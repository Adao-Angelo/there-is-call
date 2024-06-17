import { I_service } from "../model/service";

interface I_service_repository {
  list_services(): Promise<I_service[]>;
  create_service(service: I_service): Promise<void>;
  list_services_by_name(): Promise<[]>;
}

export { I_service_repository };
