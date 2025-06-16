
import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HotelSidebar } from "./HotelSidebar";

const HotelLayout = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full">
        <HotelSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center px-6 backdrop-blur-md bg-black/10 border-b border-black/20">
            <SidebarTrigger className="text-black hover:bg-black/20" />
            <h1 className="ml-4 text-xl font-semibold text-black">Hotel Management System</h1>
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
