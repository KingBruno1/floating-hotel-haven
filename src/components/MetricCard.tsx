
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
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trendDirection === "up" ? "text-green-400" : "text-red-400"
          }`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
};

export default MetricCard;
