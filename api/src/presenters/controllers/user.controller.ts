import { Request, Response } from "express";
import { UserRegisterUseCase } from "../../application/uses.cases/user/user.register";
import { UserLoginUseCase } from "../../application/uses.cases/user/user.login";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserDTO } from "../../domain/dto/user.dto";
import { UserLoginDTO } from "../../domain/dto/user.login.dto";
import { AuthUserDTO } from "../../domain/dto/auth.user.dto";

export class UserController {
  constructor(
    private readonly userRegisterUseCase: UserRegisterUseCase,
    private readonly userLoginUseCase: UserLoginUseCase
  ) {}

  login = async (req: Request, res: Response): Promise<any> => {
    try {
      const userLoginDTO: UserLoginDTO = req.body;
      const authUserDTO: AuthUserDTO = await this.userLoginUseCase.run(userLoginDTO);
      return res.status(200).json(authUserDTO);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  registerUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const userEntity: UserEntity = req.body;
      const userDto: UserDTO = await this.userRegisterUseCase.run(userEntity);
      return res.status(200).json(userDto);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
}
