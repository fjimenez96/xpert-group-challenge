import { Router } from "express";
import { BreedRoutes } from "./breed.routes";

export class MainRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/breeds",BreedRoutes.routes);

    return router;
  }
}
