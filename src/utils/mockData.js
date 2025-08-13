import { 
  Users,
  Settings, Rocket, Shield, Pause, Clock,
  CreditCard, Tag, FileCheck, AlertCircle, BarChart3, Search, Bell, Calendar, ChevronDown, TrendingUp, TrendingDown, FileText,
List, Menu, X, Moon, Sun
} from 'lucide-react';

export const mockData = {
  totalKycs: 3456,
  newKyc: { count: 3000, change: 12, trend: 'up' },
  modifiedKyc: { count: 456, change: -10, trend: 'down', myKra: 400, interop: 56 },
  barChartData: [
    { name: 'Individual', Today: 350, Yesterday: 300 },
    { name: 'Non Individual', Today: 300, Yesterday: 250 }
  ],
  statusCards: [
    { title: 'KYC Initiated', count: 234, color: 'text-blue-600', bgColor: 'bg-blue-100', icon: Rocket },
    { title: 'Under Process', count: 45, color: 'text-orange-600', bgColor: 'bg-orange-100', icon: Settings },
    { title: 'Registered', count: 350, color: 'text-teal-600', bgColor: 'bg-teal-100', icon: Users },
    { title: 'Validated', count: 654, color: 'text-green-600', bgColor: 'bg-green-100', icon: Shield },
    { title: 'Hold', count: 269, color: 'text-cyan-600', bgColor: 'bg-cyan-100', icon: Pause },
    { title: 'Docs Pending', count: 100, color: 'text-red-600', bgColor: 'bg-red-100', icon: Clock }
  ],
  panData: {
    solicited: 956,
    received: 320,
    consumed: 50,
    pending: 30
  },
  panStats: {
    solicitedTotal: 956,
    solicitedMyKra: 400,
    solicitedWithImage: 250,
    solicitedWithoutImage: 256,
    receivedTotal: 320,
    receivedMyKra: 300,
    receivedWithImage: 100,
    receivedWithoutImage: 20
  }
};



export const menuItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Applications', icon: FileText, active: false },
    { name: 'Billing', icon: CreditCard, active: false },
    { name: 'Rate Card', icon: Tag, active: false },
    { name: 'Agreement Copy', icon: FileCheck, active: false },
    { name: 'Notices', icon: AlertCircle, active: false }
  ];


  export const timeRanges = ['Today', 'This Month', 'Custom'];

  export const COLORS = {
    solicited: '#1E40AF', 
    received: '#3B82F6',
    consumed: '#06B6D4', 
    pending: '#EF4444'   
  };
