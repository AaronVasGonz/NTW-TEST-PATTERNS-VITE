import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../ui/navigation-menu';


export default function AuthOptions() {
    return (
        <NavigationMenu >
            <NavigationMenuList className='gap-4 flex '>
                <NavigationMenuItem className="flex gap-2">
                    <NavigationMenuLink href="/signUp" target="" className="text-white text-lg flex items-center">
                        Sign Up
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/signIn" target="" className="text-white text-lg flex items-center ">
                        Sign In
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

