import { Request, Response } from "express";
import { CreateAuthInput } from "../schema/auth.schema";
import { signAccessToken, signRefreshToken } from "../service/auth.service";
import { createUser, findUserByPhoneNumber } from "../service/user.service";

export async function loginUserHandler(
  req: Request<{}, {}, CreateAuthInput>,
  res: Response
) {
  try {
    const { phoneNumber, mPin } = req.body;
    const message: string = "Incorrect phonenumber or mpin";

    // check user exists
    const userFound = await findUserByPhoneNumber(phoneNumber);
    if (!userFound) return res.status(400).json({ message });

    // check mpin is valid
    const isValidMpin = await userFound.validateMPin(mPin);
    if (!isValidMpin) return res.status(400).json({ message });

    // generate access and refreshtoken
    const accessToken = await signAccessToken(
      {
        userId: userFound._id,
        phoneNumber: userFound.phoneNumber,
      }
      // userFound._id,
      // userFound.phoneNumber
      // "1h"
    );

    const refreshToken = await signRefreshToken({
      userId: userFound._id,
      phoneNumber: userFound.phoneNumber,
    });

    res.header("Authorization", "Bearer " + accessToken);
    res.header("Refresh-Token", refreshToken);
    return res.json({ message: "User Logged in Successfully" });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ err: e.errors });
  }
}
