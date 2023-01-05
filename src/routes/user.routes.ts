import express from "express";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";
import { createUserHandler } from "../controllers/user.controller";
const router = express.Router();

router.route("/").post(validateResource(createUserSchema), createUserHandler);

export default router;
