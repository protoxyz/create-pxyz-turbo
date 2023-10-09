"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProtocolAuth } from "@protoxyz/auth/client";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { api } from "@/lib/api";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export function CreatePostForm() {
  const context = api.useContext();
  const createMutation = api.posts.create.useMutation({
    onSuccess: () => {
      // Clear the form.
      form.reset();
      context.posts.list.invalidate();
    },
  });
  const { user } = useProtocolAuth();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createMutation.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Hello world" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={!user} type="submit">
          {createMutation.isLoading ? "Submitting..." : "Submit"}
        </Button>

        {!user && (
          <div className="text-xs text-gray-500">
            You must be{" "}
            <Link href="/sign-in" className="text-primary underline">
              logged in
            </Link>{" "}
            to create a post.
          </div>
        )}
      </form>
    </Form>
  );
}
