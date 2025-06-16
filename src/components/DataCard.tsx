
import { ReactNode } from "react";

interface DataCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const DataCard = ({ title, children, icon }: DataCardProps) => {
  return (
    <div className="backdrop-blur-md bg-black/10 border border-black/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-black/15">
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <div className="p-2 bg-black/20 rounded-lg">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
      <div className="text-black/90">
        {children}
      </div>
    </div>
  );
};

export default DataCard;
