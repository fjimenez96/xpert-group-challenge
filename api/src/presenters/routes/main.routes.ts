import { Router } from "express";
import { BreedRoutes } from "./breed.routes";
import { ImageRoutes } from "./image.routes";
import { UserRoutes } from "./user.routes";

export class MainRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/breeds", BreedRoutes.routes);
    router.use("/api", ImageRoutes.routes);
    router.use("/api/auth", UserRoutes.routes);

    return router;
  }
}
