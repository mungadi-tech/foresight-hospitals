import { Button, TextField } from "@radix-ui/themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@radix-ui/themes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pocketbase";
import { useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export function Login() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { token, admin } = await pb.admins.authWithPassword(
        values.email,
        values.password
      );
      if (token) {
        toast({
          title: admin?.email,
          description: `${admin?.email} loggged in successfully`,
        });
        navigate({ to: "/admin/dashboard", replace: true });
      }
    } catch (error) {
      throw toast({
        title: "Error",
        description: `${error}`,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden relative">
      {/* Animated Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10%] opacity-70 blur-3xl">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full animate-slow-blob"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7F50" /> {/* Coral (Orange) */}
                <stop offset="60%" stopColor="#FF8C00" /> {/* Dark Orange */}
                <stop offset="80%" stopColor="#FF69B4" /> {/* Hot Pink */}
                <stop offset="100%" stopColor="#FF1493" /> {/* Deep Pink */}
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M226.3 90.9c31.1 14.8 71.7 15.3 97.5 37.3 25.8 22 36.8 65.5 28.6 102.3-8.2 36.8-35.6 66.9-65.1 88.6-29.5 21.7-61.1 35-95.4 37.5-34.3 2.5-71.3-5.8-97.6-28.8-26.3-23-42-60.8-39.2-96.7 2.8-35.9 24.1-69.9 51.8-92.4 27.7-22.5 61.9-33.5 89.4-40.4 27.5-6.9 48.3-9.8 64.7-2.7 16.4 7.1 27.5 19.9 35.3 25.3z"
            >
              <animate
                attributeName="d"
                dur="30s"
                repeatCount="indefinite"
                values="M226.3 90.9c31.1 14.8 71.7 15.3 97.5 37.3 25.8 22 36.8 65.5 28.6 102.3-8.2 36.8-35.6 66.9-65.1 88.6-29.5 21.7-61.1 35-95.4 37.5-34.3 2.5-71.3-5.8-97.6-28.8-26.3-23-42-60.8-39.2-96.7 2.8-35.9 24.1-69.9 51.8-92.4 27.7-22.5 61.9-33.5 89.4-40.4 27.5-6.9 48.3-9.8 64.7-2.7 16.4 7.1 27.5 19.9 35.3 25.3z;
                M232.7 108.5c30.1 16.8 68.4 24 93.6 46.7 25.2 22.7 37.3 60.8 32 95.5-5.3 34.7-27.9 65.9-55.2 87.8-27.3 21.9-59.3 34.5-93.4 36.6-34.1 2.1-70.3-6.3-97-28.5-26.7-22.2-43.9-58.2-44.1-94.2-0.2-36 16.6-71.9 41.9-97.3 25.3-25.4 59.1-40.2 89.1-49.5 30-9.3 56.2-13.1 75.5-7.8 19.3 5.3 31.7 19.7 37.6 24.9z;
                M226.3 90.9c31.1 14.8 71.7 15.3 97.5 37.3 25.8 22 36.8 65.5 28.6 102.3-8.2 36.8-35.6 66.9-65.1 88.6-29.5 21.7-61.1 35-95.4 37.5-34.3 2.5-71.3-5.8-97.6-28.8-26.3-23-42-60.8-39.2-96.7 2.8-35.9 24.1-69.9 51.8-92.4 27.7-22.5 61.9-33.5 89.4-40.4 27.5-6.9 48.3-9.8 64.7-2.7 16.4 7.1 27.5 19.9 35.3 25.3z"
              />
            </path>
          </svg>
        </div>
      </div>
      {/* Login Card */}
      <Card className="w-full max-w-md mx-auto relative z-10 bg-white/90 backdrop-blur-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign in
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <TextField.Root
                        size={"3"}
                        id="email"
                        placeholder="m@example.com"
                        required
                        type="email"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <TextField.Root
                        size={"3"}
                        id="password"
                        required
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                size="4"
                className="w-full"
                loading={form.formState.isSubmitting}
              >
                Sign in
              </Button>
              <div className="text-sm text-center text-gray-500">
                <a
                  href="#"
                  className="underline text-primary hover:text-primary-focus"
                >
                  Forgot password?
                </a>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
