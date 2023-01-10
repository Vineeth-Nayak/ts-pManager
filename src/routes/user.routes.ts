import express from "express";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";
import {
  createUserHandler,
  getUserHandler,
} from "../controllers/user.controller";
import { createAuthSchema } from "../schema/auth.schema";
import { loginUserHandler } from "../controllers/auth.controller";
// import deserializeUser from "../middleware/deserializeUser";
const router = express.Router();

router
  .route("/")
  .get(getUserHandler)
  .post(validateResource(createUserSchema), createUserHandler);
router
  .route("/login")
  .post(validateResource(createAuthSchema), loginUserHandler);

export default router;
