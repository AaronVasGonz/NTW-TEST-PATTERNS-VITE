import { SignUpForm } from "@/components/Forms/Auth/SignUpForm";
import GitHubOAuth from "@/components/OAuth/Github/githubOAuth";
import { LoginWithGoogle } from "@/components/OAuth/Google/googleOAuth";

export default function SignUp() {
    return (
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-auto sm:my-8 text-white p-4 rounded-xl">
            <SignUpForm />
            <div className="my-4">
                <span className="text-blue-900">or</span>
            </div>
            <div className="flex gap-4 mb-4">
                <LoginWithGoogle />
                <GitHubOAuth isSignIn={false} />
            </div>
            <div>
                <p className="text-black">
                    Already have an account? {" "}
                    <a href="/signIn" className="text-blue-900 hover:text-blue-700">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}