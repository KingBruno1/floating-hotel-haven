
import { useState } from "react";
import { Bed, Users, Wifi, Car, Coffee, Tv } from "lucide-react";
import DataCard from "../components/DataCard";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Occupied": return "bg-red-100 text-red-600";
      case "Available": return "bg-green-100 text-green-600";
      case "Reserved": return "bg-yellow-100 text-yellow-600";
      case "Maintenance": return "bg-gray-100 text-gray-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Room Management</h1>
        <p className="text-gray-600">Monitor and manage all hotel rooms and their current status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataCard title="Room Status Overview" icon={<Bed className="h-5 w-5 text-black" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rooms.map((room) => (
                <div 
                  key={room.id}
                  className="p-4 bg-white/60 rounded-lg border border-gray-200 hover:bg-white/80 transition-colors cursor-pointer"
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-black">Room {room.id}</h3>
                      <p className="text-gray-600">{room.type}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(room.status)}`}>
                      {room.status}
                    </span>
                  </div>
                  
                  {room.guest && (
                    <div className="mb-2">
                      <p className="text-black font-medium">{room.guest}</p>
                      <p className="text-gray-600 text-sm">Check-out: {room.checkOut}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Rate</span>
                    <span className="text-black font-semibold">${room.price}/night</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div>
          <DataCard title="Room Statistics" icon={<Users className="h-5 w-5 text-black" />}>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border border-gray-200">
                <span className="text-gray-600">Total Rooms</span>
                <span className="text-black font-semibold">120</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border border-gray-200">
                <span className="text-gray-600">Occupied</span>
                <span className="text-red-600 font-semibold">89</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border border-gray-200">
                <span className="text-gray-600">Available</span>
                <span className="text-green-600 font-semibold">28</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border border-gray-200">
                <span className="text-gray-600">Maintenance</span>
                <span className="text-gray-600 font-semibold">3</span>
              </div>
              
              <div className="mt-6">
                <h4 className="text-black font-semibold mb-3">Occupancy Rate</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '74%'}}></div>
                </div>
                <p className="text-gray-600 text-sm mt-2">74% (89/120 rooms)</p>
              </div>
            </div>
          </DataCard>

          <div className="mt-6">
            <DataCard title="Room Amenities" icon={<Coffee className="h-5 w-5 text-black" />}>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-gray-200">
                  <Wifi className="h-4 w-4 text-blue-500" />
                  <span className="text-black text-sm">Free WiFi</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-gray-200">
                  <Tv className="h-4 w-4 text-blue-500" />
                  <span className="text-black text-sm">Smart TV</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-gray-200">
                  <Coffee className="h-4 w-4 text-blue-500" />
                  <span className="text-black text-sm">Mini Bar</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-gray-200">
                  <Car className="h-4 w-4 text-blue-500" />
                  <span className="text-black text-sm">Parking</span>
                </div>
              </div>
            </DataCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
