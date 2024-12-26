import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../ui/navigation-menu';
import { NavbarItem } from '@/interfaces';

export default function DeskTopMenu({ navbarItems }: { navbarItems: NavbarItem[] }) {
    return (
        <NavigationMenu 
    
            aria-label="Main Navigation"
        >
            <NavigationMenuList className="space-x-4">
                {navbarItems.map((item, index: number) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink href={item.href} target={item.target} className="text-white text-lg flex items-center">
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.label}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}