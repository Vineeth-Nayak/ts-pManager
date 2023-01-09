import { object, string, TypeOf } from "zod";

export const createAuthSchema = object({
  body: object({
    phoneNumber: string({
      required_error: "Phone Number is required",
    }).length(10, "Incorrect Phone Number or Mpin"),

    mPin: string({
      required_error: "Mpin is required",
    }).length(4, "Incorrect Phone Number or Mpin"),
  }),
});

export type CreateAuthInput = TypeOf<typeof createAuthSchema>["body"];
