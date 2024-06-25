import { Router } from "express";
import { listServiceController } from "../modules/services_modules/user_case/list_all_services";

const service_routes = Router();

service_routes.get("/", async (request, response) => {
  await listServiceController.handle(request, response);
});
service_routes.post("/", async (request, response) => {});

export { service_routes };