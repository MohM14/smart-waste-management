import { Activity, Bell } from 'lucide-react';

interface HeaderProps {
  unreadAlerts: number;
  onShowAlerts: () => void;
}

export default function Header({ unreadAlerts, onShowAlerts }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">نظام مراقبة براميل النفايات الطبية</h1>
              <p className="text-emerald-50 text-sm mt-1">تتبع لحظي للكشف المبكر عن الأوبئة</p>
            </div>
          </div>

          <button
            onClick={onShowAlerts}
            className="relative bg-white/20 hover:bg-white/30 transition-all px-6 py-3 rounded-xl backdrop-blur-sm flex items-center gap-2"
          >
            <Bell className="w-5 h-5" />
            <span className="font-semibold">التنبيهات</span>
            {unreadAlerts > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {unreadAlerts}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
