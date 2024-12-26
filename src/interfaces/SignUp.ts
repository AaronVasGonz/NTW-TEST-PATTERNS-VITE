import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { SignUpFormSchema } from "@/functions/zod/validations/ValidateSignUpForm";

//Type for the SignUpForm
type SignUpFormType = z.infer<typeof SignUpFormSchema>;

//interface for the Username component
 interface SignUpFormReturn {
  form: UseFormReturn<SignUpFormType>;
}

export type {
    SignUpFormType,
    SignUpFormReturn
}