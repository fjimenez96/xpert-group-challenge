import jwt, { JwtPayload } from "jsonwebtoken";
import { UserEntity } from "../domain/entities/user.entity";

export class JwtUtils {
  private static readonly jwtSecretKey: string =
    process.env.JWT_SECRET_KEY || "jwtSecretKey";
  private static readonly jwtExpireIn: string =
    process.env.JWT_EXPIRE_IN || "1h";

  static async generateAuthToken(userEntity: UserEntity): Promise<string> {
    const payload = {
      id: userEntity.id,
      userName: userEntity.userName,
      password: userEntity.password,
    };
    return jwt.sign(payload, JwtUtils.jwtSecretKey, {
      expiresIn: JwtUtils.jwtExpireIn,
    });
  }

  static async validateAuthToken(token: string): Promise<JwtPayload | string> {
    return jwt.verify(token, JwtUtils.jwtSecretKey);
  }
}
