import { Request, Response } from "express";
import { UserValidateTokenUseCase } from "../../application/uses.cases/user/user.validate.token";
import { TokenStatusDTO } from "../../domain/dto/token.status.dto";

export class TokenStatusController {
  constructor(
    private readonly userValidateTokenUseCase: UserValidateTokenUseCase
  ) {}

  validate = async (req: Request, res: Response): Promise<any> => {
    try {
      const { token = "" } = req.query;
      const tokenStatusDTO: TokenStatusDTO =
        await this.userValidateTokenUseCase.run(token.toLocaleString());
      return res.status(200).json(tokenStatusDTO);
    } catch (error: any) {
      res.status(500).json(new TokenStatusDTO(false, error.message));
    }
  };
}
