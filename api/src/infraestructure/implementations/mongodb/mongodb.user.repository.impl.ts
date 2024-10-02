import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserModel } from "../../../domain/models/user.model";

export class MongodbUserRepositoryImpl implements UserRepository {
  constructor() {}
  
  async findByUserName(userName: string): Promise<UserEntity | null> {
    return await UserModel.findOne({ userName });
  }

  async save(userEntity: UserEntity): Promise<UserEntity> {
    return await UserModel.create(userEntity);
  }
}
