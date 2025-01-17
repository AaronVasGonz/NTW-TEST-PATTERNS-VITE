import { z } from 'zod';

export const SignInFormSchema = z
    .object({
        emailUsername: z
            .string()
            .min(2, { message: 'Email or Username must be at least 2 characters.' }),
        password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters.' })
            .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
            .regex(/[0-9]/, { message: 'Password must contain at least one number.' }),
    });