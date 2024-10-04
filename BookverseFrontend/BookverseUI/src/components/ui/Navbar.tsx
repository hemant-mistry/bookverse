import { Button } from "../ui/button";
export function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4">
      {/* Branding */}
      <div className="text-xl font-bold">Bookverse</div>

      {/* Buttons */}
      <div className="space-x-4">
        <Button
          variant="ghost"
          className="rounded-[25px] px-6 py-2 border border-white text-white 
                     hover:bg-white hover:text-black transition-colors duration-300"
        >
          Login
        </Button>
        <Button className="rounded-[25px] px-6 py-2">Sign Up</Button>
      </div>
    </div>
  );
}
