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
