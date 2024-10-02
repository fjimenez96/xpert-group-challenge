import { Router } from "express";
import { MongodbUserRepositoryImpl } from "../../infraestructure/implementations/mongodb/mongodb.user.repository.impl";
import { UserRegisterUseCase } from "../../application/uses.cases/user/user.register";
import { UserLoginUseCase } from "../../application/uses.cases/user/user.login";
import { UserController } from "../controllers/user.controller";
import { TokenStatusController } from "../controllers/token.status.controller";
import { UserValidateTokenUseCase } from "../../application/uses.cases/user/user.validate.token";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new MongodbUserRepositoryImpl();

    const userRegisterUseCase = new UserRegisterUseCase(repository);
    const userLoginUseCase = new UserLoginUseCase(repository);

    const controller: UserController = new UserController(
      userRegisterUseCase,
      userLoginUseCase
    );
    const { registerUser, login } = controller;

    router.post("/register", registerUser);
    router.post("/login", login);
    router.get(
      "/validate/token",
      new TokenStatusController(new UserValidateTokenUseCase()).validate
    );

    return router;
  }
}
