import { z } from "zod";
import { signInSchema, signUpSchema } from "../zod/form.zod";

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

export interface AuthFormProps {
  type: "sign-in" | "sign-up";
  themeIndex: number;
  setThemeIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface UserTypes {
  fullName: string;
  email: string;
}