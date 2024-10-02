export class UserInvalidTokenException extends Error {
  constructor() {
    super("Invalid Token");
  }
}
