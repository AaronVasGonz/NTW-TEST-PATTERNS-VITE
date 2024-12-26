import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { SignInFormReturn } from "@/interfaces/SignIn"

export const Email = ({ form }: SignInFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Email</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded" type="email" placeholder="example@example.com" {...field} />
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
