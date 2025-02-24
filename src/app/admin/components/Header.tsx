"use client"

import { useState } from "react";
import { Bell, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/admin/components/ui/Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/admin/login");
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
        </div>

        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <User className="w-6 h-6 text-gray-600" />
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
