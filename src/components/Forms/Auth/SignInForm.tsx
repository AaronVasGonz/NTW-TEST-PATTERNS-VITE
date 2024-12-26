import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema } from "@/functions/zod/validations/ValidateSignInForm";
import { Email, Password } from "../SignInFormComponents";
export default function SignInForm() {

    const form = useForm({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: any) => {
        alert(JSON.stringify(data));
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full p-4 bg-white rounded shadow-md">

                <Email form={form} />
                <Password form={form} />
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 sm:w-1/2 mx-auto rounded">Sign Up</Button>
            </form>
        </Form>
    )
}