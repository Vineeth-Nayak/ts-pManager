import { object, string, TypeOf, number } from "zod";

export const getUserSiteDetailsSchema = object({
  query: object({
    page: number().default(1),
  }),
  body: object({
    folderName: string({
      required_error: "Phone Number is required",
    }).length(10, "Length of phone number should be exactly 10"),
  }),
});

export type GetUserSiteDetailsInput = TypeOf<
  typeof getUserSiteDetailsSchema
>["body"];
export type GetUserSiteDetailsQueryParams = TypeOf<
  typeof getUserSiteDetailsSchema
>["query"];
