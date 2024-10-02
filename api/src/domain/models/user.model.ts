import mongoose, { Schema } from "mongoose";
import { UserEntity } from "../entities/user.entity";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  userName: {
    type: String,
    required: [true, "User Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

export const UserModel = mongoose.model<UserEntity>("User", userSchema);
