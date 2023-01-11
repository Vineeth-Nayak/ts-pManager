import { Request, Response } from "express";
import {
  GetUserSiteDetailsInput,
  GetUserSiteDetailsQueryParams,
} from "../schema/vault.schema";
import {
  getAllPasswordsInFolder,
  getFolderName,
} from "../service/valut.service";

export async function getUserSiteDetails(
  req: Request<{}, {}, GetUserSiteDetailsInput, GetUserSiteDetailsQueryParams>,
  res: Response
) {
  try {
    if (!res.locals.user)
      return res.status(401).json({ message: "User not logged in" });

    let page = req.query.page >= 1 ? req.query.page : 1; // for pagination
    let queryToBeExecuted = {};

    page -= 1;
    const userId = res.locals.user._id;

    let { folderName } = req.body;

    // if folderName is not given get default folder
    if (!folderName || folderName.length <= 0) {
      let folderNames = await getFolderName(userId);

      if (folderNames && folderNames.length > 0) folderName = folderNames[0];
      else return res.status(400).json({ message: "Couldn't fetch folders" });
    }

    // For all folder
    folderName.toLowerCase() === "all"
      ? (queryToBeExecuted = { userId })
      : (queryToBeExecuted = { userId, folderName });

    // send all site passwords in that folder
    const folderSitePasswords = await getAllPasswordsInFolder(
      queryToBeExecuted,
      page
    );

    // if err or not site added
    folderSitePasswords.length <= 0 &&
      res.status(404).json({ message: "There are no sites added" });

    res
      .status(200)
      .json({ data: folderSitePasswords, message: "Valut fetched" });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ err: e.errors });
  }
}
