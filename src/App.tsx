
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import HotelLayout from "./components/HotelLayout";
import Overview from "./pages/Overview";
import RoomManagement from "./pages/RoomManagement";
import StaffManagement from "./pages/StaffManagement";
import EventManagement from "./pages/EventManagement";
import InventoryManagement from "./pages/InventoryManagement";
import ExpenditureManagement from "./pages/ExpenditureManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<HotelLayout />}>
              <Route index element={<Overview />} />
              <Route path="room-management" element={<RoomManagement />} />
              <Route path="staff-management" element={<StaffManagement />} />
              <Route path="event-management" element={<EventManagement />} />
              <Route path="inventory-management" element={<InventoryManagement />} />
              <Route path="expenditure-management" element={<ExpenditureManagement />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
