import express from "express";
import { getUserSiteDetails } from "../controllers/vault.controller";
const router = express.Router();

router.route("/").get(getUserSiteDetails);

export default router;
