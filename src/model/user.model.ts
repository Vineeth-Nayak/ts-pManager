import {
  prop,
  getModelForClass,
  Severity,
  modelOptions,
  pre,
  DocumentType,
} from "@typegoose/typegoose";
import argon2 from "argon2";
import log from "../utils/logger";

@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const hash = await argon2.hash(this.mPin);
  this.mPin = hash;
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class User {
  @prop({ required: true })
  phoneNumber: string;

  @prop({ maxlength: 4, minlength: 4, required: true })
  mPin: string;

  async validateMPin(this: DocumentType<User>, candidateMPin: string) {
    try {
      return await argon2.verify(this.mPin, candidateMPin);
    } catch (error) {
      log.error(error, "Could not validate mpin");
      return false;
    }
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
