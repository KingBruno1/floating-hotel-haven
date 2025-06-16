
import React from "react";
import { Users, Clock, Award, Phone } from "lucide-react";
import DataCard from "../components/DataCard";
import './StaffManagement.css';

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

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return "status-active";
      case "On Leave": return "status-leave";
      case "Inactive": return "status-inactive";
      default: return "status-default";
    }
  };

  const getPerformanceClass = (score) => {
    if (score >= 90) return "performance-excellent";
    if (score >= 80) return "performance-good";
    return "performance-poor";
  };

  return (
    <div className="staff-management-page">
      <div className="page-header">
        <h1>Staff Management</h1>
        <p>Manage your hotel staff, schedules, and performance metrics.</p>
      </div>

      <div className="staff-management-grid">
        <div className="main-content">
          <DataCard title="Staff Directory" icon={<Users className="icon" />}>
            <div className="staff-list">
              {staff.map((member) => (
                <div key={member.id} className="staff-card">
                  <div className="staff-header">
                    <div className="staff-info">
                      <h3>{member.name}</h3>
                      <p className="staff-position">{member.position}</p>
                      <p className="staff-department">{member.department}</p>
                    </div>
                    <div className="staff-meta">
                      <span className={`staff-status ${getStatusClass(member.status)}`}>
                        {member.status}
                      </span>
                      <p className="staff-shift">{member.shift} Shift</p>
                    </div>
                  </div>
                  
                  <div className="staff-performance">
                    <div className="performance-info">
                      <Award className="performance-icon" />
                      <span className="performance-label">Performance</span>
                    </div>
                    <span className={`performance-score ${getPerformanceClass(member.performance)}`}>
                      {member.performance}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="sidebar-content">
          <DataCard title="Department Overview" icon={<Clock className="icon" />}>
            <div className="departments-list">
              {departments.map((dept, index) => (
                <div key={index} className="department-item">
                  <div className="department-header">
                    <span className="department-name">{dept.name}</span>
                    <span className="department-count">{dept.active}/{dept.count}</span>
                  </div>
                  <div className="department-bar">
                    <div 
                      className="department-fill" 
                      style={{width: `${(dept.active / dept.count) * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<Phone className="icon" />}>
            <div className="actions-list">
              <button className="action-btn primary">Schedule Meeting</button>
              <button className="action-btn success">Add New Staff</button>
              <button className="action-btn warning">Generate Report</button>
              <button className="action-btn purple">View Schedules</button>
            </div>
          </DataCard>

          <DataCard title="Staff Statistics" icon={<Award className="icon" />}>
            <div className="stats-summary">
              <div className="summary-item">
                <span className="summary-label">Total Staff</span>
                <span className="summary-value">42</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">On Duty</span>
                <span className="summary-value active">39</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">On Leave</span>
                <span className="summary-value warning">3</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Avg Performance</span>
                <span className="summary-value">91%</span>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
