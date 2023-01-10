import {
  prop,
  getModelForClass,
  Severity,
  modelOptions,
  pre,
  DocumentType,
  Ref,
} from "@typegoose/typegoose";
import { User } from "./user.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Vault {
  @prop({ ref: () => User })
  userId: Ref<User>;

  @prop({ required: true, maxlength: 300 })
  url: String;

  @prop({ required: true, maxlength: 255 })
  siteName: String;

  @prop({ required: true, maxlength: 255 })
  folderName: String;

  @prop({ required: true, maxlength: 255 })
  userName: String;

  @prop({ required: true, maxlength: 300 })
  sitePassword: String;

  @prop({ maxlength: 300 })
  notes: String;

  @prop({ maxlength: 300 })
  iconLink: String;
}

const VaultModel = getModelForClass(Vault);

export default VaultModel;
