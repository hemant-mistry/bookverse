import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/LoginPage";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "../src/services/AuthProvider";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
