
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
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your hotel today.</p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Guests"
          value="156"
          icon={<Users className="h-6 w-6 text-black" />}
          trend="+12%"
          trendDirection="up"
        />
        <MetricCard
          title="Occupied Rooms"
          value="89/120"
          icon={<Bed className="h-6 w-6 text-black" />}
          trend="74%"
          trendDirection="up"
        />
        <MetricCard
          title="Revenue Today"
          value="$12,450"
          icon={<DollarSign className="h-6 w-6 text-black" />}
          trend="+8%"
          trendDirection="up"
        />
        <MetricCard
          title="Events Today"
          value="3"
          icon={<Calendar className="h-6 w-6 text-black" />}
          trend="2 upcoming"
        />
      </div>

      {/* Data Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataCard
          title="Recent Bookings"
          icon={<Activity className="h-5 w-5 text-black" />}
        >
          <div className="space-y-4">
            {recentBookings.map((booking, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium text-black">{booking.guest}</p>
                  <p className="text-sm text-gray-600">{booking.room}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black">{booking.checkIn}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === "Confirmed" 
                      ? "bg-green-400/20 text-green-400" 
                      : "bg-yellow-400/20 text-yellow-400"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard
          title="Staff on Duty"
          icon={<Clock className="h-5 w-5 text-black" />}
        >
          <div className="space-y-4">
            {staffOnDuty.map((staff, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium text-black">{staff.name}</p>
                  <p className="text-sm text-gray-600">{staff.position}</p>
                </div>
                <span className="text-sm bg-blue-400/20 text-blue-400 px-2 py-1 rounded-full">
                  {staff.shift}
                </span>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard
          title="Occupancy Trends"
          icon={<TrendingUp className="h-5 w-5 text-black" />}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">This Week</span>
              <span className="text-black font-semibold">82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{width: '82%'}}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Week</span>
              <span className="text-black font-semibold">76%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-400 h-2 rounded-full" style={{width: '76%'}}></div>
            </div>
          </div>
        </DataCard>

        <DataCard
          title="Guest Satisfaction"
          icon={<Star className="h-5 w-5 text-black" />}
        >
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on 156 reviews</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Service Quality</span>
                <span className="text-black">4.9</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cleanliness</span>
                <span className="text-black">4.8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Amenities</span>
                <span className="text-black">4.7</span>
              </div>
            </div>
          </div>
        </DataCard>
      </div>
    </div>
  );
};

export default Overview;
