'use client'
import Nav from '@/components/Nav'
import React from 'react'
import { FormControl,Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Fraunces } from 'next/font/google';
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters")
})
const fraunces = Fraunces({
  subsets : ['latin'],
  weight: ['400', '600'],
})
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>)=> {
    console.log(values)
  }

  return (
    <div className='bg-primary_color xl:px-20 px-4'>
      <Nav pageName={'contact'}/>
      <section className="flex flex-col pt-24 gap-10 md:gap-0 md:pt-0 md:flex-row items-center justify-between  min-h-screen px-6 font-medium">
        <div className='text-white flex flex-col justify-start gap-5'>
          <h1
              className="text-5xl md:text-6xl font-bold "
            >
            Contact Us.
          </h1>
          <p >
            Email, call, or complete the form to learn how <br/>
            Snappy can solve your messaging problem. 
          </p>
          <p className='underline'>
            blablabla@gmail.com
          </p>
          <p>0600005588</p>
        </div>
        <div className="max-w-md  p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-1">Get in Touch</h2>
          <p className="text-gray-500 mb-6">You can reach us anytime</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
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
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone number" type="tel" {...field} />
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
                    <FormControl>
                      <textarea className='border-2 rounded-sm p-2 w-full border-black' placeholder="How can we help?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full hover:bg-[#3d5f25] bg-primary_color">
                Submit
              </Button>
            </form>
          </Form>

    </div>

    </section>
    </div>
  )
}

export default Page
