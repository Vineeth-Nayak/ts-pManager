import UserModel, { User } from "../model/user.model";

export async function createUser(input: Partial<User>) {
  let userFound: any = false;
  input.phoneNumber != undefined &&
    (userFound = await findUserByPhoneNumber(input.phoneNumber));
  if (!userFound) return UserModel.create(input);
  return false;
}

export async function findUserByPhoneNumber(phoneNumber: string) {
  return await UserModel.findOne({ phoneNumber: phoneNumber });
}
