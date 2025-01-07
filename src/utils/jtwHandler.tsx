import { jwtDecode } from "jwt-decode";

export const getJwtPayload = (jwt: string) => {
    const payload = jwtDecode(jwt);
    return payload;
};