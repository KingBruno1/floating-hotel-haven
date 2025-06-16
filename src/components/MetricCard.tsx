
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
    <div className="backdrop-blur-md bg-black/10 border border-black/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-black/15 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-black/20 rounded-xl group-hover:bg-black/30 transition-colors duration-300">
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
