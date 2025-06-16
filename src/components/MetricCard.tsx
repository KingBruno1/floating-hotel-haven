
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendDirection?: "up" | "down";
}

const MetricCard = ({ title, value, icon, trend, trendDirection }: MetricCardProps) => {
  return (
    <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/90 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/60 rounded-xl group-hover:bg-white/80 transition-colors duration-300 border border-gray-200">
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trendDirection === "up" ? "text-green-600" : "text-red-600"
          }`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-3xl font-bold text-black">{value}</p>
    </div>
  );
};

export default MetricCard;
