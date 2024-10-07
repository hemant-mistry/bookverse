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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7134/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        login(data.token, "email");
        navigate("/"); // Redirect to home page or dashboard
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    if (credential) {
      login(credential, "google"); // Store Google credential and mark login as Google-based
      navigate("/"); // Redirect to home page
    } else {
      console.error("Google credential is undefined");
    }
  };

  return (
    <div className="flex items-center justify-center mt-[150px] lg:mt-[80px] md:mt-[80px] ">
      <Card className="mx-auto max-w-sm dark:bg-blue-500 dark:bg-opacity-5">
        <CardHeader>
          <CardTitle className="text-2xl dark:text-white">Login</CardTitle>
          <CardDescription className="dark:text-gray-400">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginSubmit}>
            <div className="grid gap-4">
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email" className="dark:text-white text-left">
                  Email
                </Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  required
                  className="dark:bg-blue-500 dark:bg-opacity-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="dark:text-white">
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="dark:bg-blue-500 dark:bg-opacity-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full dark:text-black">
                Login
              </Button>
            </div>
          </form>
          <br/>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Google Login Failed");
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
