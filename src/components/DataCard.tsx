
import { ReactNode } from "react";

interface DataCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const DataCard = ({ title, children, icon }: DataCardProps) => {
  return (
    <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/90">
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <div className="p-2 bg-white/60 rounded-lg border border-gray-200">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
      <div className="text-black">
        {children}
      </div>
    </div>
  );
};

export default DataCard;
