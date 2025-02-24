"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, ClipboardList, PlusCircle } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <ClipboardList className="w-5 h-5" /> },
    { name: "Orders", href: "/admin/orders", icon: <ClipboardList className="w-5 h-5" /> },
    { name: "Add Order", href: "/admin/orders/add", icon: <PlusCircle className="w-5 h-5" /> },
    { name: "Add Engineer", href: "/admin/engineers/add", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-md transition ${
    pathname === item.href ? "bg-gray-700" : "hover:bg-gray-800"
  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
