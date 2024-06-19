import { Router } from "express";

const service_routes = Router();

service_routes.get("/", async (request, response) => {
  response.json({ message: "get services routes" });
});
service_routes.post("/", async (request, response) => {
});

export { service_routes };
