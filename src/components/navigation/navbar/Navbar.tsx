import React, { useEffect, useState } from 'react';
import { MobileMenu, DeskTopMenu } from '../index'
import { NavbarItem } from '@/interfaces';
import AuthOptions from './AuthOptions';
import { verifyAuth } from '@/auth/auth';
import { UserOptions } from './UserOptions';
export default function Navbar({ menuItems }: { menuItems: NavbarItem[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const [userPayload, setUserPayload] = useState<any>(null);

    useEffect(() => {
        verifyAuth(setIsAuthenticated);
    }, []);

    return (
        <nav className="bg-blue-900 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className='flex items-center'>
                    <a href="/" className="text-lg font-bold">LOGO</a>
                </div>
                <div className="hidden md:block">
                    <DeskTopMenu navbarItems={menuItems} />
                </div>
                {!isAuthenticated ? (
                    <div className="hidden md:block">
                        <AuthOptions />
                    </div>
                ) : (
                    <div>
                        <UserOptions />
                    </div>
                )}
                <div className="md:hidden flex-1 text-right">
                    <button
                        className="text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ?
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            :
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.7761 13.7761 8 13.5 8H1.5C1.22386 8 1 7.7761 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        }
                    </button>
                </div>
            </div>
            {isOpen && (
                <MobileMenu navbarItems={menuItems} />
            )}
        </nav>
    );
}
