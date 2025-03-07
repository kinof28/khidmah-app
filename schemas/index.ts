import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginDto = z.infer<typeof loginSchema>;

export const createCustomerSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string(),
    location: z.string(),
  })
  .required();

export type CreateCustomerDto = z.infer<typeof createCustomerSchema>;
