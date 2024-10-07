import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Auth context interface
interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string, method: "google" | "email") => void;
  logout: () => void;
  isGoogleLogin: boolean;
}

// Initializing AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthContext hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// AuthProvider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  // Function to handle login
  const login = (token: string, method: "google" | "email") => {
    setIsLoggedIn(true);
    setIsGoogleLogin(method === "google");

    // Store token in localStorage
    localStorage.setItem("auth_token", token);
    localStorage.setItem("login_method", method);
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setIsGoogleLogin(false);

    // Remove token and login method from localStorage
    localStorage.removeItem("auth_token");
    localStorage.removeItem("login_method");
  };

  // Check localStorage for authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const loginMethod = localStorage.getItem("login_method");

    if (token && loginMethod) {
      setIsLoggedIn(true);
      setIsGoogleLogin(loginMethod === "google");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isGoogleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
