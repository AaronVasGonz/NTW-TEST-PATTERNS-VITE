import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../ui/navigation-menu';
import { NavbarItem } from '@/interfaces';
export default function MobileMenu({ navbarItems }: { navbarItems: NavbarItem[] }) {
    return (
        <div className="md:hidden bg-blue-850 p-4 flex justify-center items-center">
            <NavigationMenu>
                <NavigationMenuList className="flex flex-col space-y-4 items-center w-full">
                    {navbarItems.map((item, index: number) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink href={item.href} target={item.target} className="text-white text-lg flex items-center">
                                {item.icon && <span className="mr-2">{item.icon}</span>}
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/signIn" target="" className="text-white text-lg flex items-center">
                            Sign In
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/signUp" target="" className="text-white text-lg flex items-center">
                            Sign Up
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
           
        </div>
    );
}