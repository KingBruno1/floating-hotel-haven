
import React from 'react';
import { 
  Users, 
  Bed, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Activity,
  Clock,
  Star
} from "lucide-react";
import MetricCard from "../components/MetricCard";
import DataCard from "../components/DataCard";
import './Overview.css';

const Overview = () => {
  const recentBookings = [
    { guest: "John Smith", room: "Suite 101", checkIn: "Today", status: "Confirmed" },
    { guest: "Sarah Johnson", room: "Deluxe 205", checkIn: "Tomorrow", status: "Pending" },
    { guest: "Mike Davis", room: "Standard 303", checkIn: "Dec 18", status: "Confirmed" },
  ];

  const staffOnDuty = [
    { name: "Emma Wilson", position: "Front Desk", shift: "Morning" },
    { name: "James Brown", position: "Housekeeping", shift: "Day" },
    { name: "Lisa Garcia", position: "Concierge", shift: "Evening" },
  ];

  return (
    <div className="overview-page">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening at your hotel today.</p>
      </div>

      <div className="metrics-grid">
        <MetricCard
          title="Total Guests"
          value="156"
          icon={<Users className="metric-icon-svg" />}
          trend="+12%"
          trendDirection="up"
        />
        <MetricCard
          title="Occupied Rooms"
          value="89/120"
          icon={<Bed className="metric-icon-svg" />}
          trend="74%"
          trendDirection="up"
        />
        <MetricCard
          title="Revenue Today"
          value="$12,450"
          icon={<DollarSign className="metric-icon-svg" />}
          trend="+8%"
          trendDirection="up"
        />
        <MetricCard
          title="Events Today"
          value="3"
          icon={<Calendar className="metric-icon-svg" />}
          trend="2 upcoming"
        />
      </div>

      <div className="data-cards-grid">
        <DataCard
          title="Recent Bookings"
          icon={<Activity className="data-card-icon-svg" />}
        >
          <div className="bookings-list">
            {recentBookings.map((booking, index) => (
              <div key={index} className="booking-item">
                <div className="booking-info">
                  <p className="booking-guest">{booking.guest}</p>
                  <p className="booking-room">{booking.room}</p>
                </div>
                <div className="booking-details">
                  <p className="booking-checkin">{booking.checkIn}</p>
                  <span className={`booking-status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard
          title="Staff on Duty"
          icon={<Clock className="data-card-icon-svg" />}
        >
          <div className="staff-list">
            {staffOnDuty.map((staff, index) => (
              <div key={index} className="staff-item">
                <div className="staff-info">
                  <p className="staff-name">{staff.name}</p>
                  <p className="staff-position">{staff.position}</p>
                </div>
                <span className="staff-shift">{staff.shift}</span>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard
          title="Occupancy Trends"
          icon={<TrendingUp className="data-card-icon-svg" />}
        >
          <div className="trends-content">
            <div className="trend-item">
              <div className="trend-header">
                <span className="trend-label">This Week</span>
                <span className="trend-value">82%</span>
              </div>
              <div className="trend-bar">
                <div className="trend-fill current" style={{width: '82%'}}></div>
              </div>
            </div>
            <div className="trend-item">
              <div className="trend-header">
                <span className="trend-label">Last Week</span>
                <span className="trend-value">76%</span>
              </div>
              <div className="trend-bar">
                <div className="trend-fill previous" style={{width: '76%'}}></div>
              </div>
            </div>
          </div>
        </DataCard>

        <DataCard
          title="Guest Satisfaction"
          icon={<Star className="data-card-icon-svg" />}
        >
          <div className="satisfaction-content">
            <div className="satisfaction-score">
              <div className="score-number">4.8</div>
              <div className="stars-rating">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`star ${star <= 4 ? 'filled' : 'empty'}`} 
                  />
                ))}
              </div>
              <p className="reviews-count">Based on 156 reviews</p>
            </div>
            <div className="satisfaction-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">Service Quality</span>
                <span className="breakdown-score">4.9</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Cleanliness</span>
                <span className="breakdown-score">4.8</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Amenities</span>
                <span className="breakdown-score">4.7</span>
              </div>
            </div>
          </div>
        </DataCard>
      </div>
    </div>
  );
};

export default Overview;
