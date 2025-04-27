import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  profileImage: z
    .string()
    .url("Invalid image URL format")
    .optional()
    .or(z.literal("")),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const appUserSchema = z.object({
  id: z.string().regex(/^[a-zA-Z0-9_-]{28}$/, "Invalid user ID format"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format"),
  profileImage: z
    .string()
    .url("Invalid image URL format")
    .optional()
    .or(z.literal("")),
  createdAt: z.string().optional(),
});