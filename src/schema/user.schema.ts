import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    phoneNumber: string({
      required_error: "Phone Number is required",
    }).length(10, "Length of mpin should be exactly 10"),

    mPin: string({
      required_error: "Mpin is required",
    }).length(4, "Length of mpin should be exactly 4"),
    // .min(4, "Length of mpin should be 4")
    // .max(4, "Length of mpin should be 4"),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
