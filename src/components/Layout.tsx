import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, menuItems, AppSideBar } from './navigation';
import {  SidebarProvider } from './ui/sidebar';
import { Button } from './ui/button';
import { useSidebar } from "@/components/ui/sidebar";

export function CustomTrigger() {
    const { toggleSidebar, open, isMobile } = useSidebar();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className={`
                transition-all duration-300
                flex items-center justify-center
                hover:bg-gray-100 dark:hover:bg-gray-800
                h-8 w-8 rounded-full
                ${open && isMobile
                    ? 'absolute mr-[.8rem] right-0 mt-2 transform hover:scale-105'
                    : 'hidden '
                }
            `}
            aria-label={open ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
        >
            {open ? (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            ) : (
                <p>Cerrar</p>
            )}
        </Button>
    );
}

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col items-stretch">
            <Navbar menuItems={menuItems} />
            
            <div className="flex flex-1">
                <SidebarProvider>
                    <div className="hidden md:block w-64 flex-shrink-0 transition-all duration-300 ease-in-out bg-gray-800">
                        <AppSideBar />
                    </div>
                    <main className="flex-1 bg-gray-100 p-4">
                        <div className="max-w-7xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </SidebarProvider>
            </div>
            
            <footer className="bg-blue-900 text-white py-4 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <p className="text-sm text-center md:text-left">&copy; 2024 NorthWind. Todos los derechos reservados.</p>
                    <div className="flex space-x-4">
                        <span className="text-sm hover:text-blue-200 cursor-pointer transition-colors">Términos</span>
                        <span className="text-sm hover:text-blue-200 cursor-pointer transition-colors">Privacidad</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
