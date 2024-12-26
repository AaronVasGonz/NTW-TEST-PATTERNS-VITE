import { z } from 'zod';

export const SignUpFormSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Invalid email address.',
    }),
    password: z.string().regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
      {
        message:
          'Password must be 8-15 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.',
      }
    ),
    passwordConfirm: z.string().min(6, {
      message: 'Please confirm your password.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'], // Campo que será señalado con el error
    message: 'Passwords must match.',
  });
