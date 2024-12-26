import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function EmailVerify() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get("username");
    const email = queryParams.get("email");
    return (
        <div className="flex flex-col items-center bg-gray-600 bg-opacity-10 sm:w-1/2 w-full sm:mx-[15rem] text-white p-4 rounded ">

            <div className="flex flex-col text-center space-y-4 w-full p-4 bg-white rounded shadow-md">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-blue-500" />
                </div>
                <h2 className="text-black">Dear {username} </h2>
                <p className="text-black">We have sent a verification email to .{<span className="text-blue-900">{email}</span>} Please verify your email to continue.</p>
            </div>
        </div>
    )
}
