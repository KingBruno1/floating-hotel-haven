
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import DataCard from "../components/DataCard";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-green-400/20 text-green-400";
      case "Planning": return "bg-yellow-400/20 text-yellow-400";
      case "Cancelled": return "bg-red-400/20 text-red-400";
      case "Booked": return "bg-red-400/20 text-red-400";
      case "Available": return "bg-green-400/20 text-green-400";
      case "Maintenance": return "bg-gray-400/20 text-gray-400";
      default: return "bg-white/20 text-white";
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Event Management</h1>
        <p className="text-white/70">Organize and manage hotel events, venues, and bookings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataCard title="Upcoming Events" icon={<Calendar className="h-5 w-5 text-white" />}>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                      <p className="text-white/70">{event.organizer}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">{event.guests} guests</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="space-y-6">
          <DataCard title="Venue Status" icon={<MapPin className="h-5 w-5 text-white" />}>
            <div className="space-y-3">
              {venues.map((venue, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{venue.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(venue.status)}`}>
                      {venue.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Capacity: {venue.capacity}</span>
                    <span>${venue.price}/day</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Event Statistics" icon={<Calendar className="h-5 w-5 text-white" />}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">This Month</span>
                <span className="text-white font-semibold">12 events</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Next Month</span>
                <span className="text-white font-semibold">8 events</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Revenue</span>
                <span className="text-green-400 font-semibold">$45,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Avg Guests</span>
                <span className="text-white font-semibold">180</span>
              </div>
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<Users className="h-5 w-5 text-white" />}>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors">
                New Event
              </button>
              <button className="w-full p-3 bg-green-400/20 text-green-400 rounded-lg hover:bg-green-400/30 transition-colors">
                Check Availability
              </button>
              <button className="w-full p-3 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
                Event Calendar
              </button>
              <button className="w-full p-3 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors">
                Generate Quote
              </button>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
