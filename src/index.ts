require("dotenv").config();
import express, { Request, Response } from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";
const port = process.env.PORT || config.get<number>("port") || 5000;
const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

app.listen(port, () => {
  //   console.log("Running on port", port);
  log.info(`Running on port ${port}`);
  connectToDb();
});
