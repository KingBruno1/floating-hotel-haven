
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';
import './HotelLayout.css';

const HotelLayout = () => {
  return (
    <div className="hotel-layout">
      <AppSidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default HotelLayout;
