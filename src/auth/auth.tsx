import { deleteCookie, getCookie } from "@/utils/cookies";
import { getJwtPayload } from "@/utils/jtwHandler";
import { Dispatch, SetStateAction } from "react";

export const verifyAuth = (
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
): boolean => {
    const jwt = getCookie('jwt');
    if (jwt) {
        try {
            const payload = getJwtPayload(jwt);
            if (payload.exp && Date.now() >= payload.exp * 1000) {
                setIsAuthenticated(false);  //set authentication state to false if the JWT has expired
                deleteCookie('jwt'); //delete the JWT if it has expired
                return false; //return false if the JWT has expired
            }
            setIsAuthenticated(true);//if the JWT is valid, set the authentication state to true
            return true; //return true if the JWT is valid
        } catch (error) {
            console.error('Error while decoding the token:', error);
            setIsAuthenticated(false); //in case of an error, set authentication state to false
            return false;
        }
    } else {
        console.log('JWT not found');
        setIsAuthenticated(false); //set authentication state to false if no JWT is found
        return false; // return false if no JWT is found
    }
};

export const logout = () => {
    deleteCookie('jwt');
    window.location.href = '/signIn';
}