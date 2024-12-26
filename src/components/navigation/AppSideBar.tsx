
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function SidebarTrigger() {
    const { toggleSidebar, open } = useSidebar();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            aria-label={open ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
        >
            {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </Button>
    );
}

export default function AppSidebar() {
    const { open } = useSidebar();

    return (
        <div className="flex flex-col h-full relative">
            <Sidebar className={`
                fixed md:absolute 
                top-0 left-0 
                w-64 h-full
                bg-white dark:bg-gray-800
                shadow-lg z-40
                transition-transform duration-300
                ${open ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <SidebarHeader className="relative">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-xl font-bold text-center py-4 ">Northwind</h1>
                        <div className="md:hidden">
                            <SidebarTrigger />
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <a href="/" className="block py-2 px-1 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                            Dashboard
                        </a>
                        <a href="/about" className="block py-2 px-1 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                            Configuración
                        </a>
                        <a href="/profile" className="block py-2 px-1 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                            Perfil
                        </a>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter className="absolute bottom-0 w-full py-4 border-t">
                    <p className="text-center text-gray-500">&copy; 2024 NorthWind</p>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}