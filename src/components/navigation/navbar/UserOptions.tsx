import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { logout } from "@/auth/auth";
import { useEffect, useState } from "react";
import { JwtPayload as DefaultJwtPayload } from "jwt-decode";

interface JwtPayload extends DefaultJwtPayload {
    username?: string;
}
import { getCookie } from "@/utils/cookies";
import { jwtDecode } from "jwt-decode";
export function UserOptions() {
    const  [user, setUser] = useState<JwtPayload | null>(null);
    useEffect(()=>{
        const jwt = getCookie('jwt');
        if (jwt) {
            const decoded = jwtDecode(jwt);
            setUser(decoded);
        }
    }, []);
    return (
        <div className="flex items-center gap-1">

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="rounded-full cursor-pointer">
                        <AvatarImage className="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white w-[200px] shadow-md rounded-xl p-2 mt-2">
                    <DropdownMenuLabel className="text-black hover:bg-gray-100 hover:rounded-xl px-4 py-1 mb-1 text-center">
                       Welcome {user?.username}
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="text-black hover:bg-gray-100 hover:rounded-xl px-4 py-1 mb-1 text-center">
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuLabel onClick={logout} className="px-4 py-1 text-black hover:bg-red-500 hover:rounded-xl hover:text-white cursor-pointer text-center">
                        Logout
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}