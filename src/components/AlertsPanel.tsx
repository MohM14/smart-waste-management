import { X, AlertCircle, AlertTriangle, AlertOctagon, Clock } from 'lucide-react';
import { Alert } from '../types';

interface AlertsPanelProps {
  alerts: Alert[];
  isOpen: boolean;
  onClose: () => void;
}

const severityConfig = {
  warning: {
    icon: AlertCircle,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    label: 'تحذير',
  },
  critical: {
    icon: AlertTriangle,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    label: 'حرج',
  },
  emergency: {
    icon: AlertOctagon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    label: 'طارئ',
  },
};

export default function AlertsPanel({ alerts, isOpen, onClose }: AlertsPanelProps) {
  if (!isOpen) return null;

  const unresolvedAlerts = alerts.filter(alert => !alert.is_resolved);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      ></div>

      <div className="fixed left-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 animate-slide-in-left overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">التنبيهات النشطة</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-emerald-50 text-sm">
            {unresolvedAlerts.length} تنبيه نشط
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {unresolvedAlerts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <AlertCircle className="w-16 h-16 mb-4" />
              <p className="text-lg">لا توجد تنبيهات نشطة</p>
            </div>
          ) : (
            unresolvedAlerts.map((alert) => {
              const config = severityConfig[alert.severity];
              const Icon = config.icon;

              return (
                <div
                  key={alert.id}
                  className={`${config.bg} ${config.border} border-2 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${config.color} p-2 rounded-lg bg-white/50`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`${config.color} font-bold text-sm`}>
                          {config.label}
                        </span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Clock className="w-3 h-3" />
                          {new Date(alert.created_at).toLocaleTimeString('ar-SA', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm leading-relaxed">
                        {alert.message_ar}
                      </p>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-600">البرميل: {alert.bin_id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
