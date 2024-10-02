import { createContext, useContext, useState, ReactNode } from "react";
/// IMPORTANT NOTE:
/// TODO: Before granting the access to secured content, need to add a server validation too.

// auth context interface
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
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

// AuthProvider component wrapper
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
