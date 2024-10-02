import { JwtUtils } from "../../../config/jwt.utils";
import { TokenStatusDTO } from "../../../domain/dto/token.status.dto";
import { UserInvalidTokenException } from "../../../domain/exceptions/user/user.invalid.token.exception";
import { UserTokenExpiredException } from "../../../domain/exceptions/user/user.token.expired.exception";
import { UserTokenNotProviderException } from "../../../domain/exceptions/user/user.token.not.provider.exception";

export class UserValidateTokenUseCase {
  constructor() {}

  async run(token: string): Promise<TokenStatusDTO> {
    try {
      if (!token) {
        throw new UserTokenNotProviderException();
      }

      const payload = await JwtUtils.validateAuthToken(token);
      if (!payload) {
        throw new UserInvalidTokenException();
      }

      return new TokenStatusDTO(true, "Token Is Valid");
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        throw new UserTokenExpiredException();
      }
      throw new UserInvalidTokenException();
    }
  }
}
