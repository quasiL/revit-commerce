"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const formSchema = z.object({
    name: z
      .string()
      .min(1, { message: "Please enter your name." })
      .max(50, { message: "Try to keep the name within 50 characters." }),
    lastName: z
      .string()
      .max(50, { message: "Try to keep the last name within 50 characters." }),
    email: z
      .string()
      .min(1, { message: "Please enter your email." })
      .email({ message: "Please enter a valid email." }),
    message: z
      .string()
      .min(1, { message: "Please enter your message." })
      .max(1000, {
        message: "Try to keep the message within 1000 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <section className="w-3/5 mx-auto py-16">
      <h1 className="text-3xl font-bold pb-12 text-center">
        If you have any questions about the course, feel free to ask!
      </h1>
      <div className="flex justify-between items-start gap-12">
        <div className="w-2/5 bg-slate-500 h-[40rem]">placeholder</div>
        <div className="w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
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
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder=""
                        className="resize-none h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
