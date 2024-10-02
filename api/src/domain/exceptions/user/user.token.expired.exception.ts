export class UserTokenExpiredException extends Error {
  constructor() {
    super("Token Expired");
  }
}
