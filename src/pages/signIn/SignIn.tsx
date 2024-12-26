import SignInForm from "@/components/Forms/Auth/SignInForm";
export default function SignIn() {
    return (
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-[15rem] text-white p-4 rounded">
            <SignInForm/>
        </div>
    );
}