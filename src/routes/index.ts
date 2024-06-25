import { Router } from "express";
import { user_routes } from "./user.routes";
import { service_routes } from "./service.routes";
import { authenticationRoutes } from "./authentication.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const routes = Router();
routes.use("/users", user_routes);
routes.use("/services", service_routes);
routes.use("/sessions", authenticationRoutes);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { routes };
