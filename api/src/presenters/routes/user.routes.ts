import { Router } from "express";
import { MongodbUserRepositoryImpl } from "../../infraestructure/implementations/mongodb/mongodb.user.repository.impl";
import { UserRegisterUseCase } from "../../application/uses.cases/user/user.register";
import { UserLoginUseCase } from "../../application/uses.cases/user/user.login";
import { UserController } from "../controllers/user.controller";

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

    return router;
  }
}
