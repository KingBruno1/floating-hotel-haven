
import React from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import DataCard from "../components/DataCard";
import './EventManagement.css';

const EventManagement = () => {
  const events = [
    {
      id: 1,
      title: "Corporate Conference",
      date: "Dec 18, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Grand Ballroom",
      guests: 150,
      status: "Confirmed",
      organizer: "Tech Solutions Inc."
    },
    {
      id: 2,
      title: "Wedding Reception",
      date: "Dec 20, 2024",
      time: "6:00 PM - 11:00 PM",
      venue: "Garden Pavilion",
      guests: 200,
      status: "Planning",
      organizer: "Smith & Johnson Wedding"
    },
    {
      id: 3,
      title: "Annual Gala Dinner",
      date: "Dec 22, 2024",
      time: "7:00 PM - 12:00 AM",
      venue: "Crystal Hall",
      guests: 300,
      status: "Confirmed",
      organizer: "Charity Foundation"
    },
  ];

  const venues = [
    { name: "Grand Ballroom", capacity: 200, status: "Available", price: 2500 },
    { name: "Crystal Hall", capacity: 300, status: "Booked", price: 3500 },
    { name: "Garden Pavilion", capacity: 150, status: "Available", price: 1800 },
    { name: "Executive Lounge", capacity: 50, status: "Maintenance", price: 800 },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed": return "status-confirmed";
      case "Planning": return "status-planning";
      case "Cancelled": return "status-cancelled";
      case "Booked": return "status-booked";
      case "Available": return "status-available";
      case "Maintenance": return "status-maintenance";
      default: return "status-default";
    }
  };

  return (
    <div className="event-management-page">
      <div className="page-header">
        <h1>Event Management</h1>
        <p>Organize and manage hotel events, venues, and bookings.</p>
      </div>

      <div className="event-management-grid">
        <div className="main-content">
          <DataCard title="Upcoming Events" icon={<Calendar className="icon" />}>
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <div className="event-info">
                      <h3>{event.title}</h3>
                      <p className="event-organizer">{event.organizer}</p>
                    </div>
                    <span className={`event-status ${getStatusClass(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <Calendar className="detail-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <Clock className="detail-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin className="detail-icon" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="event-detail">
                      <Users className="detail-icon" />
                      <span>{event.guests} guests</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="sidebar-content">
          <DataCard title="Venue Status" icon={<MapPin className="icon" />}>
            <div className="venues-list">
              {venues.map((venue, index) => (
                <div key={index} className="venue-item">
                  <div className="venue-header">
                    <span className="venue-name">{venue.name}</span>
                    <span className={`venue-status ${getStatusClass(venue.status)}`}>
                      {venue.status}
                    </span>
                  </div>
                  <div className="venue-details">
                    <span className="venue-capacity">Capacity: {venue.capacity}</span>
                    <span className="venue-price">${venue.price}/day</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Event Statistics" icon={<Calendar className="icon" />}>
            <div className="event-stats">
              <div className="stat-item">
                <span className="stat-label">This Month</span>
                <span className="stat-value">12 events</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Next Month</span>
                <span className="stat-value">8 events</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Revenue</span>
                <span className="stat-value revenue">$45,200</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Avg Guests</span>
                <span className="stat-value">180</span>
              </div>
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<Users className="icon" />}>
            <div className="event-actions">
              <button className="action-btn primary">New Event</button>
              <button className="action-btn success">Check Availability</button>
              <button className="action-btn purple">Event Calendar</button>
              <button className="action-btn warning">Generate Quote</button>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
