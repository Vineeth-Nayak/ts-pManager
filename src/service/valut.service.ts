import VaultModel from "../model/vault.model";
const constants = require("../utils/constants");

export async function getFolderName(userId: String) {
  return await VaultModel.find({ userId }).distinct("folderName");
}

export async function getAllPasswordsInFolder(query: Object, page: number) {
  return await VaultModel.find(query, (err: any, docs: any) => {
    if (err) return [];
    if (docs && docs.length > 0) return [];
  })
    .select("-createdAt -__V -updateAt")
    .limit(constants.RESULTS_PER_PAGE)
    .skip(constants.RESULTS_PER_PAGE * page);
}
