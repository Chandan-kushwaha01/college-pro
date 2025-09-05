import AppSidebar from '@/components/dashboard/sidebar/app-sidebar'
import SidebarHeader from '@/components/dashboard/sidebar/sidebar-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/* Sidebar Header */}
          <SidebarHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
