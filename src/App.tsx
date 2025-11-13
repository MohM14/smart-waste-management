import { useState, useEffect } from 'react';
import { Trash2, MapPin, AlertTriangle, Activity } from 'lucide-react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import BinMap from './components/BinMap';
import SensorDetails from './components/SensorDetails';
import AlertsPanel from './components/AlertsPanel';
import SystemExplanation from './components/SystemExplanation';
import { mockBins, mockSensorReadings, mockAlerts } from './data/mockData';

function App() {
  const [selectedBinId, setSelectedBinId] = useState<string | null>(null);
  const [showAlerts, setShowAlerts] = useState(false);
  const [bins, setBins] = useState(mockBins);
  const [readings, setReadings] = useState(mockSensorReadings);
  const [alerts, setAlerts] = useState(mockAlerts);

  useEffect(() => {
    const interval = setInterval(() => {
      setReadings((prev) =>
        prev.map((reading) => ({
          ...reading,
          temperature: Math.max(20, Math.min(40, reading.temperature + (Math.random() - 0.5) * 2)),
          humidity: Math.max(30, Math.min(90, reading.humidity + (Math.random() - 0.5) * 3)),
          methane_level: Math.max(100, Math.min(500, reading.methane_level + (Math.random() - 0.5) * 20)),
          co2_level: Math.max(400, Math.min(1000, reading.co2_level + (Math.random() - 0.5) * 30)),
          fill_level: Math.max(0, Math.min(100, reading.fill_level + (Math.random() - 0.5) * 2)),
          timestamp: new Date().toISOString(),
        }))
      );

      setBins((prev) =>
        prev.map((bin) => ({
          ...bin,
          last_reading_time: new Date().toISOString(),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const selectedReading = selectedBinId
    ? readings.find((r) => r.bin_id === selectedBinId) || null
    : null;

  const selectedBin = selectedBinId ? bins.find((b) => b.id === selectedBinId) : null;

  const unresolvedAlerts = alerts.filter((alert) => !alert.is_resolved);
  const totalBins = bins.length;
  const criticalBins = bins.filter((b) => b.status === 'critical').length;
  const warningBins = bins.filter((b) => b.status === 'warning').length;
  const activeBins = bins.filter(
    (b) => new Date().getTime() - new Date(b.last_reading_time).getTime() < 600000
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header unreadAlerts={unresolvedAlerts.length} onShowAlerts={() => setShowAlerts(true)} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="إجمالي البراميل"
            value={totalBins}
            icon={Trash2}
            color="blue"
            trend="جميع البراميل المراقبة"
          />
          <StatCard
            title="براميل نشطة"
            value={activeBins}
            icon={Activity}
            color="green"
            trend="ترسل بيانات حالياً"
          />
          <StatCard
            title="تنبيهات حرجة"
            value={criticalBins}
            icon={AlertTriangle}
            color="red"
            trend={criticalBins > 0 ? 'تتطلب تدخل فوري' : 'لا توجد حالات حرجة'}
          />
          <StatCard
            title="تحذيرات"
            value={warningBins}
            icon={MapPin}
            color="yellow"
            trend={warningBins > 0 ? 'تتطلب متابعة' : 'لا توجد تحذيرات'}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BinMap bins={bins} selectedBin={selectedBinId} onBinSelect={setSelectedBinId} />
          <SensorDetails reading={selectedReading} binName={selectedBin?.location_name || ''} />
        </div>

        <SystemExplanation />
      </main>

      <AlertsPanel alerts={alerts} isOpen={showAlerts} onClose={() => setShowAlerts(false)} />

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="font-semibold">نظام تتبع ومراقبة براميل النفايات الطبية</p>
          <p className="text-sm mt-2">هكاثون الابتكار الصحي - الكشف المبكر عن الأوبئة</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
