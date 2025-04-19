import { z } from "zod";
import { signInSchema, signUpSchema } from "@/zod/form.zod";

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

export interface AuthFormProps {
  type: "sign-in" | "sign-up";
  themeIndex: number;
  setThemeIndex: React.Dispatch<React.SetStateAction<number>>;
  profilePreview: string | null;
  setProfilePreview: (preview: string | null) => void;
  showCamera: boolean;
  setShowCamera: (show: boolean) => void;
}

export interface UserTypes {
  fullName: string;
  email: string;
  profilePicture: string;
}