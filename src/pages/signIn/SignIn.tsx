import SignInForm from "@/components/Forms/Auth/SignInForm";
import { LoginWithGoogle } from "@/components/OAuth/Google/googleOAuth";
import GitHubOAuth from "@/components/OAuth/Github/githubOAuth";
export default function SignIn() {
    return (
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-[15rem] text-white p-4 rounded-xl">
            <SignInForm />
            <div className="my-4">
                <span className="text-blue-900">or</span>
            </div>
            <div className="flex gap-4 mb-4">
                <LoginWithGoogle />
                <GitHubOAuth isSignIn={true} />
            </div>
            <div>
                <p className="text-black">
                    Don't have an Account yet? {" "}
                    <a href="/signUp" className="text-blue-900 hover:text-blue-700">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}