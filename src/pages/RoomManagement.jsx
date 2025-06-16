
import React, { useState } from "react";
import { Bed, Users, Wifi, Car, Coffee, Tv } from "lucide-react";
import DataCard from "../components/DataCard";
import './RoomManagement.css';

const RoomManagement = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    { id: 101, type: "Suite", status: "Occupied", guest: "John Smith", checkOut: "Dec 20", price: 299 },
    { id: 102, type: "Deluxe", status: "Available", guest: null, checkOut: null, price: 199 },
    { id: 103, type: "Standard", status: "Maintenance", guest: null, checkOut: null, price: 129 },
    { id: 104, type: "Suite", status: "Reserved", guest: "Sarah Johnson", checkOut: "Dec 22", price: 299 },
    { id: 105, type: "Deluxe", status: "Occupied", guest: "Mike Davis", checkOut: "Dec 19", price: 199 },
    { id: 106, type: "Standard", status: "Available", guest: null, checkOut: null, price: 129 },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Occupied": return "status-occupied";
      case "Available": return "status-available";
      case "Reserved": return "status-reserved";
      case "Maintenance": return "status-maintenance";
      default: return "status-default";
    }
  };

  return (
    <div className="room-management-page">
      <div className="page-header">
        <h1>Room Management</h1>
        <p>Monitor and manage all hotel rooms and their current status.</p>
      </div>

      <div className="room-management-grid">
        <div className="main-content">
          <DataCard title="Room Status Overview" icon={<Bed className="icon" />}>
            <div className="rooms-grid">
              {rooms.map((room) => (
                <div 
                  key={room.id}
                  className="room-card"
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="room-header">
                    <div className="room-info">
                      <h3>Room {room.id}</h3>
                      <p className="room-type">{room.type}</p>
                    </div>
                    <span className={`room-status ${getStatusClass(room.status)}`}>
                      {room.status}
                    </span>
                  </div>
                  
                  {room.guest && (
                    <div className="room-guest">
                      <p className="guest-name">{room.guest}</p>
                      <p className="checkout-date">Check-out: {room.checkOut}</p>
                    </div>
                  )}
                  
                  <div className="room-price">
                    <span className="price-label">Rate</span>
                    <span className="price-value">${room.price}/night</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="sidebar-content">
          <DataCard title="Room Statistics" icon={<Users className="icon" />}>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Total Rooms</span>
                <span className="stat-value">120</span>
              </div>
              <div className="stat-item occupied">
                <span className="stat-label">Occupied</span>
                <span className="stat-value">89</span>
              </div>
              <div className="stat-item available">
                <span className="stat-label">Available</span>
                <span className="stat-value">28</span>
              </div>
              <div className="stat-item maintenance">
                <span className="stat-label">Maintenance</span>
                <span className="stat-value">3</span>
              </div>
              
              <div className="occupancy-section">
                <h4>Occupancy Rate</h4>
                <div className="occupancy-bar">
                  <div className="occupancy-fill" style={{width: '74%'}}></div>
                </div>
                <p className="occupancy-text">74% (89/120 rooms)</p>
              </div>
            </div>
          </DataCard>

          <DataCard title="Room Amenities" icon={<Coffee className="icon" />}>
            <div className="amenities-grid">
              <div className="amenity-item">
                <Wifi className="amenity-icon" />
                <span>Free WiFi</span>
              </div>
              <div className="amenity-item">
                <Tv className="amenity-icon" />
                <span>Smart TV</span>
              </div>
              <div className="amenity-item">
                <Coffee className="amenity-icon" />
                <span>Mini Bar</span>
              </div>
              <div className="amenity-item">
                <Car className="amenity-icon" />
                <span>Parking</span>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
