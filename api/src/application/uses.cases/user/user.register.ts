import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserEntity } from "../../../domain/entities/user.entity";
import { UserAlreadyExistsException } from "../../../domain/exceptions/user/user.already.exists.exception";
import { UserDto } from "../../../domain/dto/user.dto";
import { BcryptUtils } from "../../../config/bcrypt.utils";

export class UserRegisterUseCase {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(userEntity: UserEntity): Promise<UserDto> {
    const exists = await this._userRepository.findByUserName(
      userEntity.userName
    );

    if (exists) {
      throw new UserAlreadyExistsException();
    }

    userEntity.password = BcryptUtils.hash(userEntity.password);

    const result = await this._userRepository.save(userEntity);

    return new UserDto(result);
  }
}
