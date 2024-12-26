import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { SignInFormSchema } from "@/functions/zod/validations/ValidateSignInForm";

//Type for the SignUpForm
type SignInFormType = z.infer<typeof SignInFormSchema>;

//interface for the Username component
 interface SignInFormReturn {
  form: UseFormReturn<SignInFormType>;
}

export type {
    SignInFormType,
    SignInFormReturn
}