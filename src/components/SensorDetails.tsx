import { Thermometer, Droplets, Wind, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { SensorReading } from '../types';

interface SensorDetailsProps {
  reading: SensorReading | null;
  binName: string;
}

export default function SensorDetails({ reading, binName }: SensorDetailsProps) {
  if (!reading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">بيانات المتحسسات</h2>
        <p className="text-gray-500 text-center py-12">اختر برميلاً من الخريطة لعرض تفاصيل المتحسسات</p>
      </div>
    );
  }

  const riskColors = {
    low: 'text-emerald-600 bg-emerald-50',
    medium: 'text-amber-600 bg-amber-50',
    high: 'text-orange-600 bg-orange-50',
    critical: 'text-red-600 bg-red-50',
  };

  const riskLabels = {
    low: 'منخفض',
    medium: 'متوسط',
    high: 'عالي',
    critical: 'حرج',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">بيانات المتحسسات</h2>
          <p className="text-gray-600 text-sm mt-1">{binName}</p>
        </div>
        <span className={`px-4 py-2 rounded-full font-semibold text-sm ${riskColors[reading.risk_level]}`}>
          مستوى الخطر: {riskLabels[reading.risk_level]}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border border-red-100">
          <div className="flex items-center gap-3 mb-2">
            <Thermometer className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-gray-700">درجة الحرارة</span>
          </div>
          <p className="text-3xl font-bold text-red-600">{reading.temperature.toFixed(1)}°C</p>
          <div className="mt-2 bg-red-200 rounded-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(reading.temperature / 50) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <Droplets className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">الرطوبة</span>
          </div>
          <p className="text-3xl font-bold text-blue-600">{reading.humidity.toFixed(1)}%</p>
          <div className="mt-2 bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${reading.humidity}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
          <div className="flex items-center gap-3 mb-2">
            <Wind className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">غاز الميثان</span>
          </div>
          <p className="text-3xl font-bold text-purple-600">{reading.methane_level.toFixed(1)} <span className="text-lg">ppm</span></p>
          <div className="mt-2 bg-purple-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(reading.methane_level / 500) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">ثاني أكسيد الكربون</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{reading.co2_level.toFixed(1)} <span className="text-lg">ppm</span></p>
          <div className="mt-2 bg-green-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(reading.co2_level / 1000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-100">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-gray-700">مستوى الامتلاء</span>
          </div>
          <p className="text-3xl font-bold text-amber-600">{reading.fill_level.toFixed(0)}%</p>
          <div className="mt-2 bg-amber-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${reading.fill_level}%` }}
            ></div>
          </div>
        </div>

        <div className={`p-4 rounded-xl border ${
          reading.detected_diseases.length > 0
            ? 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200'
            : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className={`w-5 h-5 ${
              reading.detected_diseases.length > 0 ? 'text-red-600' : 'text-emerald-600'
            }`} />
            <span className="text-sm font-semibold text-gray-700">الأمراض المكتشفة</span>
          </div>
          {reading.detected_diseases.length > 0 ? (
            <div className="space-y-1">
              {reading.detected_diseases.map((disease, index) => (
                <span key={index} className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mr-1 mb-1">
                  {disease}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-2xl font-bold text-emerald-600">لا توجد أمراض</p>
          )}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        آخر تحديث: {new Date(reading.timestamp).toLocaleString('ar-SA')}
      </div>
    </div>
  );
}
