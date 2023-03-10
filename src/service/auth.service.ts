import UserModel from "../model/user.model";
import { signJwt } from "../utils/jwt";

export async function signAccessToken(
  // userId: String,
  // phoneNumber: string
  // expiresIn: string
  payload: Object
) {
  // const payload = { phoneNumber, userId };
  const accessToken = signJwt(payload, "accessTokenPrivateKey", {
    expiresIn: "1h",
  });
  return accessToken;
}

export async function signRefreshToken(payload: Object) {
  // const payload = { phoneNumber, userId };
  const refreshToken = signJwt(payload, "refreshTokenPrivateKey", {
    expiresIn: "1d",
  });
  return refreshToken;
}

export async function saveRefreshToken(userId: String, refreshToken: string) {
  const saveRefresh = await UserModel.findOneAndUpdate(
    { _id: userId },
    { refreshToken },
    { new: true }
  );
  return saveRefresh;
}
