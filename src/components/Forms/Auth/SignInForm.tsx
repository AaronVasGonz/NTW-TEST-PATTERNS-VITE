import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema } from "@/functions/zod/validations/ValidateSignInForm";
import { Email, Password } from "../SignInFormComponents";
import { onSubmithandle } from "@/functions/handles/formHandles";
import { useState } from "react";
export default function SignInForm() {

    const [serverErrors, setServerErrors] = useState<string[]>([]);
    const form = useForm({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            emailUsername: "",
            password: ""
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: any) => {
        const fetchUrl = "https://localhost:7229/api/AuthenticationApi/loginByEmail";
        const method = "POST";
        const redirect = "/";
        const headers = {
            "Content-Type": "application/json",
        };
        const requestBody = {
            emailUsername: data.emailUsername,
            password: data.password,
            oAuthToken: data.oauthToken || "", // If the user is signing up with OAuth, include the token
        };

        await onSubmithandle(requestBody, fetchUrl, method, redirect, headers, undefined, false, undefined, setServerErrors);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full p-4 bg-white rounded-xl shadow-md">
                <Email form={form} />
                <Password form={form} />
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 sm:w-1/2 w-full mx-auto rounded-xl">Sign In</Button>
                {serverErrors.length > 0 && (
                    <ul className="text-red-500 text-center">
                        {serverErrors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
            </form>
        </Form>
    )
}