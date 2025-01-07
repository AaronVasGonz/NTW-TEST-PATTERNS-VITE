import { FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpFormReturn } from "@/interfaces/SignUp"
export const Username = ({ form }: SignUpFormReturn)=>{
    return(
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">Username</FormLabel>
            <FormControl>
              <Input className="bg-white text-black rounded-xl" placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
}

export const Email = ({ form }: SignUpFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Email</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded-xl" type="email" placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export const Password = ({ form }: SignUpFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Password</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded-xl" type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export const PasswordConfirm = ({ form }: SignUpFormReturn)=>{
    return(
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Password Confirm</FormLabel>
              <FormControl>
                <Input className="bg-white text-black rounded-xl" type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}
              