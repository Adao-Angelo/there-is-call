import { Router } from "express";
import { user_routes } from "./user.routes";
import { service_routes } from "./service.routes";

const routes = Router();
routes.use("/users", user_routes);
routes.use("/services", service_routes);

export { routes };
