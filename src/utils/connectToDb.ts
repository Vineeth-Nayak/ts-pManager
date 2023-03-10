import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connectToDb = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUri);
    log.info("Connected to Db");
  } catch (error) {
    process.exit(1);
  }
};

export default connectToDb;
