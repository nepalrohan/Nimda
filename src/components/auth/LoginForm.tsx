"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



const formSchema = z.object({
  email: z.string().email({message:"Please enter a valid email address"}).min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  
});

function LoginForm() {
    const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     email:'',
     password:''
    },
  });

  const handleSubmit = () => {
router.push('/');
  };

  return (
    <>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500  border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 "
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500  border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 "
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          

          <Button className="w-full dark:bg-slate-800 dark:text-white text-center">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
