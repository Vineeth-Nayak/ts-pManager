import express from "express";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";
import { createUserHandler } from "../controllers/user.controller";
import { createAuthSchema } from "../schema/auth.schema";
import { loginUserHandler } from "../controllers/auth.controller";
const router = express.Router();

router.route("/").post(validateResource(createUserSchema), createUserHandler);
router
  .route("/login")
  .post(validateResource(createAuthSchema), loginUserHandler);

export default router;
