import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'green' | 'yellow' | 'red' | 'blue';
  trend?: string;
}

const colorClasses = {
  green: 'from-emerald-500 to-teal-500',
  yellow: 'from-amber-500 to-orange-500',
  red: 'from-red-500 to-rose-600',
  blue: 'from-blue-500 to-cyan-500',
};

export default function StatCard({ title, value, icon: Icon, color, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className="text-sm text-gray-500 mt-2">{trend}</p>
          )}
        </div>
        <div className={`bg-gradient-to-br ${colorClasses[color]} p-4 rounded-xl shadow-md`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}
