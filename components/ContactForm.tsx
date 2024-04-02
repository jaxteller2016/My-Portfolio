'use client';

import { Button } from '@/components/ui/button.tsx';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader2
} from 'lucide-react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { sendContactForm } from '@/lib/api';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { PropsWithChildren } from 'react';

declare module '@/components/ui/form' {
  export interface FormItem extends PropsWithChildren {}
  export interface FormControl extends PropsWithChildren {}
}

// Define form schema.
const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Your Name must be at least 3 characters long'
    })
    .max(100, {
      message: 'Your Name must be at most 100 characters long'
    }),
  email: z
    .string()
    .min(11, {
      message: 'Email must be at least 11 characters long'
    })
    .email({
      message: 'Invalid email address'
    }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters long'
    })
    .max(3000, {
      message: 'Message must be at most 3000 characters long'
    })
});

const initValues = {
  name: '',
  email: '',
  message: ''
};

const initState = { values: initValues, isLoading: false, error: '' };

function ContactForm() {
  type State = {
    values: {
      name: string;
      email: string;
      message: string;
    };
    isLoading: boolean;
    error: string;
  };

  const { toast } = useToast();
  const [state, setState] = useState<State>(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value }
    }));

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initValues
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    setState((prev) => ({
      ...prev,
      isLoading: true
    }));

    try {
      await sendContactForm(values);
      form.reset();
      toast({
        title: 'Your message has been successfully sent!',
        description: 'I will get back to you as soon as possible. Thank you!'
      });
      setState((prev) => ({
        ...prev,
        isLoading: false
      }));
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
      toast({
        title: 'An error occurred',
        description: error.message,
        variant: 'destructive'
      });
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-y-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }: { field: any }) => (
            // <FormItem>
            // <FormControl>
            <>
              <div>
                <div>
                  {/* input */}
                  <div className='relative flex items-center'>
                    <Input
                      type='name'
                      id='name'
                      placeholder='Your Full Name'
                      value={values.name}
                      onChange={handleChange}
                      {...field}
                    />
                    <User
                      className='absolute'
                      style={{ right: 1.5 + 'rem' }}
                      size={20}
                    />
                  </div>
                </div>
              </div>

              {/* </FormControl> */}
              <FormMessage />
              {/* </FormItem> */}
            </>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }: { field: any }) => (
            // <FormItem>
            // <FormControl>
            <>
              <div>
                <div>
                  {/* input */}
                  <div className='relative flex items-center'>
                    <Input
                      type='email'
                      id='email'
                      placeholder='Your E-mail address'
                      value={values.email}
                      onChange={handleChange}
                      {...field}
                    />
                    <MailIcon
                      className='absolute'
                      style={{ right: 1.5 + 'rem' }}
                      size={20}
                    />
                  </div>
                </div>
              </div>

              {/* </FormControl> */}
              <FormMessage />
            </>
            // </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }: { field: any }) => (
            // <FormItem>
            // <FormControl>
            <>
              <div>
                <div>
                  {/* input */}
                  <div className='relative flex items-center'>
                    <Textarea
                      type='message'
                      id='message'
                      placeholder='Your Message'
                      value={values.message}
                      onChange={handleChange}
                      {...field}
                    />
                    <MessageSquare
                      className='absolute top-4'
                      style={{ right: 1.5 + 'rem' }}
                      size={20}
                    />
                  </div>
                </div>
              </div>
              {/* </FormControl> */}
              <FormMessage />
              {/* </FormItem> */}
            </>
          )}
        />
        <Button
          className='flex items-center max-w-[166px]'
          type='submit'
          style={{ maxWidth: 166 + 'px' }}
          disabled={form.formState.isSubmitting}
        >
          {isLoading && (
            <Loader2
              style={{
                marginRight: '8px',
                height: '16px',
                width: '16px',
                animation: 'spin 2s linear infinite'
              }}
            />
          )}
          {!isLoading && "Let's talk"}
          {!isLoading && <ArrowRightIcon className='ml-2' size={20} />}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
