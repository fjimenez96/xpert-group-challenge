import { UserDTO } from "./user.dto";

export class AuthUserDTO {
  constructor(readonly userDTO: UserDTO, readonly token: string) {}
}
