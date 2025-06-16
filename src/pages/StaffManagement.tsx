
import { Users, Clock, Award, Phone } from "lucide-react";
import DataCard from "../components/DataCard";

const StaffManagement = () => {
  const staff = [
    { id: 1, name: "Emma Wilson", position: "Front Desk Manager", department: "Reception", shift: "Morning", status: "Active", performance: 95 },
    { id: 2, name: "James Brown", position: "Housekeeping Supervisor", department: "Housekeeping", shift: "Day", status: "Active", performance: 88 },
    { id: 3, name: "Lisa Garcia", position: "Concierge", department: "Guest Services", shift: "Evening", status: "Active", performance: 92 },
    { id: 4, name: "David Kim", position: "Maintenance Engineer", department: "Maintenance", shift: "Morning", status: "On Leave", performance: 87 },
    { id: 5, name: "Sarah Ahmad", position: "Event Coordinator", department: "Events", shift: "Flexible", status: "Active", performance: 94 },
  ];

  const departments = [
    { name: "Reception", count: 8, active: 7 },
    { name: "Housekeeping", count: 15, active: 14 },
    { name: "Guest Services", count: 6, active: 6 },
    { name: "Maintenance", count: 4, active: 3 },
    { name: "Events", count: 3, active: 3 },
    { name: "Security", count: 6, active: 6 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-400/20 text-green-400";
      case "On Leave": return "bg-yellow-400/20 text-yellow-400";
      case "Inactive": return "bg-red-400/20 text-red-400";
      default: return "bg-gray-200 text-gray-600";
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Staff Management</h1>
        <p className="text-gray-600">Manage your hotel staff, schedules, and performance metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataCard title="Staff Directory" icon={<Users className="h-5 w-5 text-black" />}>
            <div className="space-y-4">
              {staff.map((member) => (
                <div key={member.id} className="p-4 bg-white/60 rounded-lg border border-gray-200 hover:bg-white/80 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                      <p className="text-gray-500 text-sm">{member.department}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                      <p className="text-gray-600 text-sm mt-1">{member.shift} Shift</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-600 text-sm">Performance</span>
                    </div>
                    <span className={`font-semibold ${getPerformanceColor(member.performance)}`}>
                      {member.performance}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="space-y-6">
          <DataCard title="Department Overview" icon={<Clock className="h-5 w-5 text-black" />}>
            <div className="space-y-3">
              {departments.map((dept, index) => (
                <div key={index} className="p-3 bg-white/60 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium">{dept.name}</span>
                    <span className="text-gray-600 text-sm">{dept.active}/{dept.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{width: `${(dept.active / dept.count) * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<Phone className="h-5 w-5 text-black" />}>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors">
                Schedule Meeting
              </button>
              <button className="w-full p-3 bg-green-400/20 text-green-400 rounded-lg hover:bg-green-400/30 transition-colors">
                Add New Staff
              </button>
              <button className="w-full p-3 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors">
                Generate Report
              </button>
              <button className="w-full p-3 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
                View Schedules
              </button>
            </div>
          </DataCard>

          <DataCard title="Staff Statistics" icon={<Award className="h-5 w-5 text-black" />}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Staff</span>
                <span className="text-black font-semibold">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">On Duty</span>
                <span className="text-green-400 font-semibold">39</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">On Leave</span>
                <span className="text-yellow-400 font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Avg Performance</span>
                <span className="text-black font-semibold">91%</span>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
