import { UserEntity } from "../entities/user.entity";

export class UserDTO {

    readonly id: string;
    readonly name: string;
    readonly userName: string;

    constructor(userEntity: UserEntity){
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.userName = userEntity.userName;
    }
}