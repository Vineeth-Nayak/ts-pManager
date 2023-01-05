import express from "express";
import user from "./user.routes";

const router = express.Router();

router.use("/api/user", user);

export default router;
