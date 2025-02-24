import React, {ReactNode} from "react";
import  Sidebar  from "@/app/admin/components/Sidebar";
import  Header  from "@/app/admin/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Top Header with User Menu & Notifications */}
        <Header />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
