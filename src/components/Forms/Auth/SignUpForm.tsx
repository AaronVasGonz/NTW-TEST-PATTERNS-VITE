import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema } from "@/functions/zod/validations/ValidateSignUpForm";
import { Email, Password, PasswordConfirm, Username } from "./SignUpFormComponents";
import { onSubmithandle } from "@/functions/handles/formHandles";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export function SignUpForm() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [serverErrors, setServerErrors] = useState<string[]>([]);
    const defaultUsername = queryParams.get("username");
    const defaultEmail = queryParams.get("email");

    const form = useForm({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            username: defaultUsername || "",
            email: defaultEmail || "",
            password: "",
            passwordConfirm: "",
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data:any)=>{
        const fetchUrl = "https://localhost:7229/api/AuthenticationApi/registerByEmail";
        const method = "POST";
        const redirect = "/signUp/verify";
        const headers = {
            "Content-Type": "application/json",
        };

        const requestBody = {
            userName: data.username,
            email: data.email,
            password: data.password,
            oAuthToken: data.oauthToken || "", // If the user is signing up with OAuth, include the token
        };

        const additionalParams = {
            username: data.username,
            email: data.email,
        }
        await onSubmithandle(requestBody, fetchUrl, method, redirect, headers, undefined, false, additionalParams, setServerErrors);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full p-4 bg-white rounded-xl shadow-md">
                <Username form={form} />
                <Email form={form} />
                <Password form={form} />
                <PasswordConfirm form={form} />
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 sm:w-1/2 w-full mx-auto rounded-xl">Sign Up</Button>
                {serverErrors.length > 0 && (
                    <ul className="text-red-500 text-center">
                        {serverErrors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
            </form>
        </Form>
    );
}