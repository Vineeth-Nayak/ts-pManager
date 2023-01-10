import { Request, Response } from "express";
import {
  GetUserSiteDetailsInput,
  GetUserSiteDetailsQueryParams,
} from "../schema/vault.schema";

export async function getUserSiteDetails(
  req: Request<{}, {}, GetUserSiteDetailsInput, GetUserSiteDetailsQueryParams>,
  res: Response
) {
  try {
    if (!res.locals.user)
      return res.status(401).json({ message: "User not logged in" });

    let page = req.query.page >= 1 ? req.query.page : 1; // for pagination
    let queryToBeExecuted = "";

    page -= 1;
    const userId = res.locals.user._id;

    let { folderName } = req.body;

    // TODO: if folderName is not given get default folder
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ err: e.errors });
  }
}
