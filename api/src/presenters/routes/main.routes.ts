import { Router } from "express";
import { BreedRoutes } from "./breed.routes";
import { ImageRoutes } from "./image.route";

export class MainRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/breeds",BreedRoutes.routes);
    router.use("/api",ImageRoutes.routes);

    return router;
  }
}
