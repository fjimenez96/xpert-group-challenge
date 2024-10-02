import { Router } from "express";
import { ThirdpartyBreedRepositoryImpl } from "../../infraestructure/implementations/thirdparty/thirdparty.breed.repository.impl";
import { BreedFindAllUseCase } from "../../application/uses.cases/breed/breed.find.all";
import { BreedFindIdUseCase } from "../../application/uses.cases/breed/breed.find.id";
import { BreedFindSearchUseCase } from "../../application/uses.cases/breed/breed.find.search";
import { BreedController } from "../controllers/breed.controller";
import { Utils } from "../../config/utils";

export class BreedRoutes {
  static get routes(): Router {
    const router = Router();
    const { baseUrl, token } = Utils.getApiKeyEntity();
    const repository = new ThirdpartyBreedRepositoryImpl(baseUrl, token);

    const breedFindAllUseCase = new BreedFindAllUseCase(repository);
    const breedFindIdUseCase = new BreedFindIdUseCase(repository);
    const breedFindSearchUseCase = new BreedFindSearchUseCase(repository);

    const controller: BreedController = new BreedController(
      breedFindAllUseCase,
      breedFindIdUseCase,
      breedFindSearchUseCase
    );
    const { getBreeds, getBreedById, searchBreeds } = controller;

    router.get("/", getBreeds);
    router.get("/search", searchBreeds);
    router.get("/:breed_id", getBreedById);
    

    return router;
  }
}
