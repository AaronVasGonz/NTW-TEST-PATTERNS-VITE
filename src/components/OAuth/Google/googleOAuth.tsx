// Frontend (LoginWithGoogle.tsx)
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { setCookie } from "@/utils/cookies";
import { Button } from "@/components/ui/button";
export const LoginWithGoogle: React.FC = () => {
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                // First, get the ID token using the access token
                const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: { Authorization: `Bearer ${response.access_token}` },
                });

                const userData = await userInfo.json();

                // Now send the ID token to your backend
                const res = await fetch("https://localhost:7229/api/AuthenticationApi/OAuth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: response.access_token, // Use sub as unique identifier
                        email: userData.email,
                        name: userData.name,
                        provider: "Google",
                    }),
                });

                if (!res.ok) {
                    throw new Error("Error during Google authentication");
                }

                const data = await res.json();
                if (data.jwt) {
                    setCookie('jwt', data.jwt, 1);
                }

                // Redirect to the home page
                window.location.href = "/";
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        },
        onError: () => {
            console.error("Error while trying to log in with Google");
        },
    });

    return (
        <Button
            onClick={() => login()}
            className="rounded-full p-5 bg-red-600 hover:bg-red-700 flex items-center"
        >
            <FontAwesomeIcon icon={faGoogle} className="text-white " />
        
        </Button>
    );
};