"use client";
import React from "react";
import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Card, CardContent,CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { useRouter } from "next/navigation";



const formSchema = z.object({
    fullname:z.string({message:"Fullname is required"}).min(3, {message:"Fullname must be 3 character long"}),
  email: z.string().min(1, { message: "Email is required" }).email({message:"Please enter a valid email address"}),
  password: z.string().min(1, { message: "Password is required" }),
  
});

function RegsiterForm() {
    const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     email:'',
     password:''
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
router.push('/');
  };

  return (
    <>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Fullname
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500  border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 "
                    placeholder="Enter fullname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Register
          </Button>
        </form>
      </Form>
    </>
  );
}

export default RegsiterForm;
