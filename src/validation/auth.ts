import z from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const registerSchema = loginSchema.extend({});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
