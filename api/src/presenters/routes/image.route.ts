import { Router } from "express";
import { ThirdpartyImageRepositoryImpl } from "../../infraestructure/implementations/thirdparty/thirdparty.image.repository.impl";
import { ImageFindIdUseCase } from "../../application/uses.cases/image/image.find.id";
import { ImageController } from "../controllers/image.controller";
import { Utils } from "../../config/utils";

export class ImageRoutes {
  static get routes(): Router {
    const router = Router();
    const { baseUrl, token } = Utils.getApiKeyEntity();
    const repository = new ThirdpartyImageRepositoryImpl(baseUrl, token);

    const imageFindIdUseCase = new ImageFindIdUseCase(repository);

    const controller: ImageController = new ImageController(
        imageFindIdUseCase
    );
    const { getImageById } = controller;

    router.get("/:imagesbybreedid", getImageById);
    

    return router;
  }
}
