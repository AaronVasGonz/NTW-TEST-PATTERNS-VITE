import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema } from "@/functions/zod/validations/ValidateSignUpForm";
import { Email, Password, PasswordConfirm, Username } from "./SignUpFormComponents";
import { onSubmithandle } from "@/functions/handles/formHandles";
import { useLocation } from "react-router-dom";
export function SignUpForm() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

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
    const onSubmit = async (data:any)=>{
        const fetchUrl = "https://localhost:7229/api/AuthenticationApi/registerByEmail";
        const method = "POST";
        const redirect = "/login";
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
        await onSubmithandle(requestBody, fetchUrl, method, redirect, headers, undefined, false, additionalParams);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full p-4 bg-white rounded shadow-md">
                <Username form={form} />
                <Email form={form} />
                <Password form={form} />
                <PasswordConfirm form={form} />
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 sm:w-1/2 mx-auto rounded">Sign Up</Button>
            </form>
        </Form>
    );
}