import { SignUpForm } from "@/components/Forms/Auth/SignUpForm";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function SignUp() {
    return (
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-[15rem] text-white p-4 rounded ">
            <SignUpForm />
            <span className="text-blue-900">or</span>
            <div className="flex gap-4">
                <Button className="rounded-full p-3 bg-red-600 hover:bg-red-800">
                    <FontAwesomeIcon
                        icon={faGoogle} className="text-white"
                    />
                </Button>
                <Button className="rounded-full p-3 ">
                    <FontAwesomeIcon
                        icon={faGithub} className="text-white"
                    />
                </Button>
            </div>
            <div>
                <p className="text-black">Already have an account? <a href="/signIn" className="text-blue-900">Sign In</a></p>
            </div>
        </div>
    )
}

