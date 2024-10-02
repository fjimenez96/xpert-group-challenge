import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserEntity } from "../../../domain/entities/user.entity";
import { UserDTO } from "../../../domain/dto/user.dto";
import { BcryptUtils } from "../../../config/bcrypt.utils";
import { UserLoginDTO } from "../../../domain/dto/user.login.dto";
import { UserInvalidCredentialsException } from "../../../domain/exceptions/user/user.invalid.credentials.exception";
import { AuthUserDTO } from "../../../domain/dto/auth.user.dto";
import { JwtUtils } from "../../../config/jwt.utils";

export class UserLoginUseCase {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(userLoginDTO: UserLoginDTO): Promise<AuthUserDTO> {
    const userEntity: UserEntity | null =
      await this._userRepository.findByUserName(userLoginDTO.userName);

    if (!userEntity) {
      throw new UserInvalidCredentialsException();
    }

    const isValidPassword = BcryptUtils.compare(
      userLoginDTO.password,
      userEntity.password
    );

    if (!isValidPassword) {
      throw new UserInvalidCredentialsException();
    }

    const userDTO = new UserDTO(userEntity);
    const authToken: string = await JwtUtils.generateAuthToken(userEntity);

    return new AuthUserDTO(userDTO, authToken);
  }
}
