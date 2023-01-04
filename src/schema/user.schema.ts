import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    phoneNumber: string({
      required_error: "Phone Number is required",
    }),
    mPin: string({
      required_error: "Mpin is required",
    }),
  }),
});
