import { MapPin } from 'lucide-react';
import { Bin } from '../types';

interface BinMapProps {
  bins: Bin[];
  selectedBin: string | null;
  onBinSelect: (binId: string) => void;
}

const statusColors = {
  normal: 'bg-emerald-500',
  warning: 'bg-amber-500',
  critical: 'bg-red-500',
};

const statusLabels = {
  normal: 'طبيعي',
  warning: 'تحذير',
  critical: 'حرج',
};

export default function BinMap({ bins, selectedBin, onBinSelect }: BinMapProps) {
  const centerLat = bins.reduce((sum, bin) => sum + bin.latitude, 0) / bins.length;
  const centerLng = bins.reduce((sum, bin) => sum + bin.longitude, 0) / bins.length;

  const latRange = Math.max(...bins.map(b => b.latitude)) - Math.min(...bins.map(b => b.latitude));
  const lngRange = Math.max(...bins.map(b => b.longitude)) - Math.min(...bins.map(b => b.longitude));
  const scale = 100 / Math.max(latRange, lngRange);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">خريطة التتبع اللحظي</h2>
        <div className="flex gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600">طبيعي</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-gray-600">تحذير</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600">حرج</span>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl h-[500px] border-2 border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        {bins.map((bin) => {
          const x = ((bin.longitude - centerLng) * scale + 50);
          const y = 50 - ((bin.latitude - centerLat) * scale);

          return (
            <button
              key={bin.id}
              onClick={() => onBinSelect(bin.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                selectedBin === bin.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <div className="relative">
                <div className={`${statusColors[bin.status]} p-3 rounded-full shadow-lg border-4 border-white ${
                  bin.status === 'critical' ? 'animate-pulse' : ''
                }`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                {selectedBin === bin.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 border-2 border-gray-200 animate-fade-in">
                    <h3 className="font-bold text-gray-900 mb-2">{bin.bin_code}</h3>
                    <p className="text-sm text-gray-700 mb-2">{bin.location_name}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-3 py-1 rounded-full font-semibold ${
                        bin.status === 'critical' ? 'bg-red-100 text-red-700' :
                        bin.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {statusLabels[bin.status]}
                      </span>
                      <span className="text-gray-500">
                        {new Date(bin.last_reading_time).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                )}

                {bin.status === 'critical' && (
                  <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping"></div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
