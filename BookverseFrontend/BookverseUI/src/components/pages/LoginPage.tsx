import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export function LoginPage() {
  return (
    <div className="flex items-center justify-center mt-[150px] lg:mt-[80px] md:mt-[80px] ">
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl dark:text-white">Login</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="dark:text-white text-left">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="dark:text-white"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="dark:text-white">
                Password
              </Label>
              <Button
                variant="link"
                className="ml-auto inline-block text-sm underline dark:text-gray-400"
              >
                Forgot your password?
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="dark:text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full dark:text-black"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full dark:border-gray-600 dark:text-white"
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Button variant="link" className="dark:text-white">
            Sign Up
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
