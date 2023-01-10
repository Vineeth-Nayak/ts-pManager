import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;
  try {
    const user = await createUser(body);
    // user exists
    if (user === false)
      return res.status(409).json({ msg: "Account already exists" });

    return res.json({ msg: "User created sucessfully " });
  } catch (e: any) {
    // 409 is invalid
    if (e.code === 11000)
      return res.status(409).json({ msg: "Account already exists" });

    res.status(500).json({ err: e.errors });
  }
}

export async function getUserHandler(req: Request, res: Response) {
  res.send(res.locals.user);
}
