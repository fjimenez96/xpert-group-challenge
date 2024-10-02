import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  findByUserName: (userName: string) => Promise<UserEntity | null>;
  save: (userEntity: UserEntity) => Promise<UserEntity>;
}
