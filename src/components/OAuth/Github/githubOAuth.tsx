import { Button } from '@/components/ui/button';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { setCookie } from '@/utils/cookies';

/**
 * GitHubOAuth component handles the OAuth authentication flow with GitHub.
 *
 * @component
 *
 * @example
 * return (
 *   <GitHubOAuth />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @description
 * This component initiates the GitHub OAuth flow by redirecting the user to GitHub's authorization page.
 * Once the user authorizes the application, GitHub redirects back to the application with a code.
 * The component then exchanges this code for an access token by making a request to the backend.
 *
 * @remarks
 * - The `GITHUB_CLIENT_ID` should be replaced with your actual GitHub OAuth application's client ID.
 * - The `REDIRECT_URI` should be set to the URL where GitHub will redirect after authorization.
 * - The `BACKEND_URI` should be the endpoint in your backend that handles the GitHub OAuth callback.
 *
 * @state
 * - `user` (object|null): The authenticated user's data.
 * - `error` (string|null): Error message if the authentication fails.
 *
 * @dependencies
 * - `useState`: React hook to manage component state.
 * - `useEffect`: React hook to perform side effects in the component.
 * - `Button`: Custom button component.
 * - `FontAwesomeIcon`: FontAwesome icon component.
 * - `faGithub`: FontAwesome GitHub icon.
 */
const GitHubOAuth = ({ isSignIn = false }: { isSignIn: boolean }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);

    const GITHUB_CLIENT_ID = "Ov23li5lIOZ76y1Itrtd";
    const REDIRECT_URI = isSignIn ? "http://localhost:5173/signIn" : "http://localhost:5173/signUp";
    const BACKEND_URI = "https://localhost:7229/api/AuthenticationApi/OAuth";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user&force_login=true`;
    
    const handleLogin = () => {
        window.location.href = githubAuthUrl;
    };

    useEffect(() => {
        const authenticateWithGitHub = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (!code) return;

            try {
                const response = await fetch(BACKEND_URI, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        code,
                        provider: "Github",
                    }),
                });

                if (!response.ok) {
                    console.error(`Unexpected response status: ${response.status}`);
                    throw new Error("Failed to fetch data from server");
                }

                const data = await response.json();
                console.log("Server response:", data);

                if (data.jwt) {
                    // Set the JWT token in the cookie
                    setCookie('jwt', data.jwt, 1);
                    // Redirect to the home page
                    window.location.href = "/";
                } else {
                    console.error("JWT token not found in the response");
                    setError("Authentication succeeded but no token was returned.");
                }
            } catch (err) {
                console.error("Error during authentication flow:", err);
                setError("Error while trying to authenticate with GitHub");
            }
        };

        authenticateWithGitHub();
    }, []);

    return (
        <div>
            <Button
                onClick={handleLogin}
                className="rounded-full p-5 bg-gray-800 hover:bg-gray-900 flex items-center"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white"
                />
            </Button>
        </div>
    );
};

export default GitHubOAuth;
