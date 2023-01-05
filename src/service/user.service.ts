import UserModel, { User } from "../model/user.model";

export async function createUser(input: Partial<User>) {
  const userFound = await UserModel.findOne({ phoneNumber: input.phoneNumber });
  if (!userFound) return UserModel.create(input);
  return false;
}
