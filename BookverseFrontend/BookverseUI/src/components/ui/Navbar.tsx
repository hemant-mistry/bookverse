import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/services/AuthProvider";
import { CirclePlus } from "lucide-react";

export function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Get the login status from context

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleMenuItemClick = (action: string) => {
    switch (action) {
      case "viewProfile":
        console.log("View Profile clicked");
        // Add logic to navigate to the profile page
        break;
      case "privacy":
        console.log("Privacy clicked");
        // Add logic to navigate to the privacy settings
        break;
      case "logout":
        console.log("Logout clicked");
        // Add logic to handle user logout
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-6 py-4">
      {/* Branding */}
      <div className="text-xl font-bold pr-2">Bookverse</div>

      {/* Buttons or Avatar based on login status */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
        {!isLoggedIn ? (
          <>
            <Button
              variant="ghost"
              className="rounded-[25px] px-4 py-1 sm:px-6 sm:py-2 border border-white text-white 
                      hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              className="rounded-[25px] px-4 py-1 sm:px-6 sm:py-2"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <div className="flex items-center space-x-8">
            {/* Transparent button with CirclePlus Icon */}
            <Button
              className="rounded-full p-2 bg-transparent border-none text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
              onClick={() => console.log("Add action triggered")}
            >
              <CirclePlus size={40} color="white" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="bottom">
                <DropdownMenuItem
                  onClick={() => handleMenuItemClick("viewProfile")}
                >
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleMenuItemClick("privacy")}
                >
                  Privacy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuItemClick("logout")}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
