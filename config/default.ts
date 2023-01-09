require("dotenv").config();

export default {
  port: 5000,
  dbUri: "mongodb://127.0.0.1/ts-password-manager",
  logLevel: "info",
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
  refreshTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  refreshTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
};
