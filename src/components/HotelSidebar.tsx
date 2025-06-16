
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
      <div className="h-full backdrop-blur-md bg-black/10 border-r border-black/20 shadow-2xl">
        <SidebarContent className="bg-transparent">
          <div className="p-6 border-b border-black/20">
            <div className="flex items-center gap-3">
              <Hotel className="h-8 w-8 text-black" />
              {!isCollapsed && (
                <div>
                  <h2 className="text-lg font-bold text-black">Luxury Hotel</h2>
                  <p className="text-sm text-black/70">Management Portal</p>
                </div>
              )}
            </div>
          </div>
          
          <SidebarGroup>
            <SidebarGroupLabel className="text-black/70 px-6 py-4">
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
                              ? "bg-black/20 text-black shadow-lg border border-black/30"
                              : "text-black/80 hover:bg-black/10 hover:text-black"
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
