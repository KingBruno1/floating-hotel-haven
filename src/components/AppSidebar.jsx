
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Bed,
  Users,
  Calendar,
  Package,
  DollarSign
} from 'lucide-react';
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
} from '@/components/ui/sidebar';
import './AppSidebar.css';

const navigation = [
  { title: 'Overview', url: '/', icon: Home },
  { title: 'Room Management', url: '/room-management', icon: Bed },
  { title: 'Staff Management', url: '/staff-management', icon: Users },
  { title: 'Event Management', url: '/event-management', icon: Calendar },
  { title: 'Inventory Management', url: '/inventory-management', icon: Package },
  { title: 'Expenditure Management', url: '/expenditure-management', icon: DollarSign },
];

const AppSidebar = () => {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={`app-sidebar ${collapsed ? 'collapsed' : ''}`} collapsible>
      <SidebarContent>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Hotel Manager</h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive: navIsActive }) => 
                        `sidebar-nav-link ${navIsActive ? 'active' : ''}`
                      }
                    >
                      <item.icon className="sidebar-nav-icon" />
                      {!collapsed && <span className="sidebar-nav-text">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
