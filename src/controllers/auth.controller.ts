import { Request, Response } from "express";
import { CreateAuthInput } from "../schema/auth.schema";
import { signAccessToken } from "../service/auth.service";
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

    const accessToken = await signAccessToken(
      userFound._id,
      userFound.phoneNumber
    );

    return res.json({ accessToken });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ err: e.errors });
  }
}
