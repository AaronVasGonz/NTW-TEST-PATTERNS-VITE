import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../ui/navigation-menu';


export default function AuthOptions() {
    return (
        <NavigationMenu >
            <NavigationMenuList className='gap-2'>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/signUp" target="" className="text-white text-lg flex items-center">
                        Sign Up
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

