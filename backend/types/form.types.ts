import { z } from "zod";
import { signInSchema, signUpSchema, appUserSchema } from "../zod/form.zod";

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type AppUser = z.infer<typeof appUserSchema>;

export interface SignupParams {
  uid: string;
  email: string;
  fullName: string;
  profileImage?: string;
}

export interface SignInParams {
  email: string;
  idToken: string;
}