import { Request, Response } from "express";
import { UserRegisterUseCase } from "../../application/uses.cases/user/user.register";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserDto } from "../../domain/dto/user.dto";

export class UserController {
  constructor(private readonly userRegisterUseCase: UserRegisterUseCase) {}

  registerUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const userEntity: UserEntity = req.body;
      const userDto: UserDto = await this.userRegisterUseCase.run(userEntity);
      return res.status(200).json(userDto);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
}
