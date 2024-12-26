 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle} from "@fortawesome/free-regular-svg-icons";

 export default function EmailVerified() {
    return(
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-[15rem] text-white p-4 rounded ">
        <div className="flex flex-col text-center space-y-4 w-full p-4 bg-white rounded shadow-md">
            <div>
                <FontAwesomeIcon icon={faCheckCircle} className="text-5xl text-green-500" />
            </div>
            <h2 className="text-black">Email Verified</h2>
            <p className="text-black">Your email has been verified. You can now login to your account.</p>
        </div>
    </div>
    )
 }