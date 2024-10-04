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
import { useAuth } from "@/services/AuthProvider";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    // Check if the user credentials are already stored in localStorage
    const token = localStorage.getItem("google_token");
    if (token) {
      setIsLoggedIn(true); // Log the user in automatically
      navigate("/"); // Redirect to home page
    }
  }, [setIsLoggedIn, navigate]);

  const handleGoogleLoginSuccess =  (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    if (credential) {
      console.log(credentialResponse);
      // Store the Google login credential in localStorage
      localStorage.setItem("google_token", credential);
      setIsLoggedIn(true); // Set user as logged in
      navigate("/"); // Redirect to home page
    } else {
      console.error("Google credential is undefined");
    }
  };

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
            <Button type="submit" className="w-full dark:text-black">
              Login
            </Button>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
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
