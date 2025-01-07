import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { SignInFormReturn } from "@/interfaces/SignIn"

export const Email = ({ form }: SignInFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="emailUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Username or Email</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded" placeholder="example@example.com or example123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export const Password = ({ form }: SignInFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Password</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded" type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}
