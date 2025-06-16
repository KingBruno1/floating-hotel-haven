
import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HotelSidebar } from "./HotelSidebar";

const HotelLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex min-h-screen w-full">
        <HotelSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center px-6 backdrop-blur-md bg-white/10 border-b border-white/20">
            <SidebarTrigger className="text-white hover:bg-white/20" />
            <h1 className="ml-4 text-xl font-semibold text-white">Hotel Management System</h1>
          </header>
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HotelLayout;
