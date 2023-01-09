import UserModel, { User } from "../model/user.model";
import { signJwt } from "../utils/jwt";
import { findUserByPhoneNumber } from "./user.service";
import config from "config";

export async function signAccessToken(userId: String, phoneNumber: string) {
  const payload = { phoneNumber, userId };
  const accessToken = signJwt(payload, "accessTokenPrivateKey");
  return accessToken;
}
