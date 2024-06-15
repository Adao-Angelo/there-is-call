import { Router } from "express";
import { user_routes } from "./user.routes";

const routes = Router();
routes.use("/users", user_routes);

export { routes };
