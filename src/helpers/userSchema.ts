import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1).max(60),
  email: z.string().min(1).email(),
  isAdmin: z.string().min(1),
});

export type UserPayload = {
  name: string;
  email: string;
  isAdmin: boolean;
  __v: number;
  _id: string;
};

export type UserType = z.infer<typeof UserSchema>;
