import { z } from "zod";
import { signInSchema, signUpSchema, appUserSchema } from "../zod/form.zod";

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type AppUser = z.infer<typeof appUserSchema>;