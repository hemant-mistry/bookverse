import { useAuth } from "@/services/AuthProvider";

export function HomePage() {
  const { isLoggedIn } = useAuth(); // Get the login status from context
  return (
    <>
      HomePage
      <div className="secured-part">This part of the HomePage is Unsecured!</div>
      {/* Conditionally render the secured part if the user is logged in */}
      {isLoggedIn && (
        <div className="secured-part">
          This part of the HomePage is Secured!
        </div>
      )}
    </>
  );
}
