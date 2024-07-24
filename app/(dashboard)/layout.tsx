import Navbar from "./_component/navbar";
import OrganizationSidebar from "./_component/organizationSidebar";
import Sidebar from "./_component/sideabar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-16 h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
