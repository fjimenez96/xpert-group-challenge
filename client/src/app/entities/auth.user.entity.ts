import { User } from "./user.entity";

export interface AuthUser {
    readonly user: User;
    readonly token: string;
}