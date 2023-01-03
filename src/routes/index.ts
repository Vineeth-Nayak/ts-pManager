import express from "express";
const router = express.Router();
const user = require("./user.routes");

router.use("/api/user", user);

export default router;
