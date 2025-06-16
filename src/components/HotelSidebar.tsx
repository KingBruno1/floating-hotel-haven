
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bed,
  Users,
  Calendar,
  Package,
  TrendingDown,
  Hotel
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Room Management", url: "/room-management", icon: Bed },
  { title: "Staff Management", url: "/staff-management", icon: Users },
  { title: "Event Management", url: "/event-management", icon: Calendar },
  { title: "Inventory Management", url: "/inventory-management", icon: Package },
  { title: "Expenditure Management", url: "/expenditure-management", icon: TrendingDown },
];

export function HotelSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r-0 bg-transparent">
      <div className="h-full backdrop-blur-md bg-white/80 border-r border-gray-200 shadow-2xl">
        <SidebarContent className="bg-transparent">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Hotel className="h-8 w-8 text-black" />
              {!isCollapsed && (
                <div>
                  <h2 className="text-lg font-bold text-black">Luxury Hotel</h2>
                  <p className="text-sm text-gray-600">Management Portal</p>
                </div>
              )}
            </div>
          </div>
          
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-600 px-6 py-4">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-3">
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-2">
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                            isActive
                              ? "bg-white/90 text-black shadow-lg border border-gray-200"
                              : "text-black hover:bg-white/60 hover:text-black"
                          }`
                        }
                      >
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
