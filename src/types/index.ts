export interface Bin {
  id: string;
  bin_code: string;
  location_name: string;
  latitude: number;
  longitude: number;
  status: 'normal' | 'warning' | 'critical';
  last_reading_time: string;
}

export interface SensorReading {
  id: string;
  bin_id: string;
  temperature: number;
  humidity: number;
  methane_level: number;
  co2_level: number;
  fill_level: number;
  detected_diseases: string[];
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
}

export interface Alert {
  id: string;
  bin_id: string;
  alert_type: string;
  severity: 'warning' | 'critical' | 'emergency';
  message_ar: string;
  is_resolved: boolean;
  created_at: string;
  resolved_at?: string;
}
