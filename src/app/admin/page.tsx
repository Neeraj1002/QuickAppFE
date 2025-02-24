import DashboardCard from "@/app/admin/components/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Dashboard Cards for Orders, Engineers, Notifications */}
        <DashboardCard title="Total Orders" count={120} />
        <DashboardCard title="Active Engineers" count={15} />
        <DashboardCard title="Pending Assignments" count={5} />
      </div>
    </div>
  );
}
