import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop({ required: true })
  phoneNumber: string;

  @prop({ maxlength: 4, minlength: 4, required: true })
  mpin: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
