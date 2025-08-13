import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { 
  Search, Bell, Calendar, ChevronDown, TrendingUp, TrendingDown, 
  Users, FileText, CreditCard, Tag, FileCheck, AlertCircle,
  Home, Settings, Rocket, Shield, Pause, Clock,
  BarChart3, List, Menu, X, Moon, Sun
} from 'lucide-react';

// Mock API Data matching the image
const mockData = {
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

// Loading Skeleton Components
const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
  </div>
);

const SkeletonChart = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
    <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
  </div>
);

// Main Dashboard Component
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Today');
  const [categoryView, setCategoryView] = useState('Individual');
  const [solicitedView, setSolicitedView] = useState('Individual');
  const [chartView, setChartView] = useState('bar');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Simulate API call
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setData(mockData);
      setLoading(false);
    };
    fetchData();
  }, [activeTab]);

  const menuItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Applications', icon: FileText, active: false },
    { name: 'Billing', icon: CreditCard, active: false },
    { name: 'Rate Card', icon: Tag, active: false },
    { name: 'Agreement Copy', icon: FileCheck, active: false },
    { name: 'Notices', icon: AlertCircle, active: false }
  ];

  const timeRanges = ['Today', 'This Month', 'Custom'];

  const COLORS = {
    solicited: '#1E40AF', // Blue
    received: '#3B82F6', // Light Blue
    consumed: '#06B6D4', // Cyan
    pending: '#EF4444'   // Red
  };

  // Prepare data for Nivo Bar
  const barData = data
    ? data.barChartData.map(d => ({
        category: d.name,
        Today: d.Today,
        Yesterday: d.Yesterday
      }))
    : [];

  // Prepare data for Nivo Pie
  const pieData = data
    ? [
        { id: 'Solicited', value: data.panData.solicited, color: COLORS.solicited },
        { id: 'Received', value: data.panData.received, color: COLORS.received },
        { id: 'Consumed', value: data.panData.consumed, color: COLORS.consumed },
        { id: 'Pending', value: data.panData.pending, color: COLORS.pending }
      ]
    : [];

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed lg:static z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 min-h-screen border-r border-gray-200 dark:border-gray-700`}>
          <div className="p-4 sm:p-6">
            {/* Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm opacity-80"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-300 text-sm">Logo</span>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            {/* Menu Items */}
            <nav className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                      item.active 
                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Top Header */}
          <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg lg:hidden"
                >
                  <Menu size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>Home</span>
                    <span>›</span>
                    <span>Dashboard</span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Axis MF</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search intermediaries" 
                    className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 dark:bg-gray-900 text-sm w-40 sm:w-64 text-gray-900 dark:text-gray-100"
                  />
                </div>
                {/* Notifications */}
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Bell size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600 dark:text-gray-300" />}
                </button>
                {/* Profile */}
                <div className="flex items-center space-x-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Sachin Arora</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Aug 13, 2025</div>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQGkJkZUksb1dw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721154018920?e=1758153600&v=beta&t=8mDPaWfI4tgSW7-X6aHTVeh4gLybuqUA-H7-rKc4lsQ" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown size={16} className="text-gray-400 dark:text-gray-500 hidden sm:block" />
                </div>
              </div>
            </div>
          </div>

          {/* Sub Header with Filters */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <span>Home</span> <span className="text-gray-400 dark:text-gray-500">›</span> <span>Dashboard</span>
              </div>
              <div className="flex items-center flex-wrap justify-end gap-2">
                {/* Time Range Tabs */}
                <div className="flex flex-1 sm:flex-none">
                  {timeRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setActiveTab(range)}
                      className={`px-3 sm:px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        activeTab === range
                          ? 'bg-blue-600 text-white rounded-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                {/* Date Picker */}
                <div className="flex items-center space-x-2 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2">
                  <Calendar size={16} className="text-gray-400 dark:text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">12 Feb 2025</span>
                  <ChevronDown size={16} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-2 sm:p-4 md:p-6">
            {loading ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
                <SkeletonChart />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                  {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                  {/* Top Cards Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Total KYCs and Trends */}
                    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
                      <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">Total KYCs</h3>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        {data.totalKycs.toLocaleString()}
                      </div>
                      <div className="space-y-4">
                        {/* New KYC */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">New KYC</div>
                              <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">{data.newKyc.count.toLocaleString()}</div>
                            </div>
                          </div>
                          <div className="flex items-center text-green-600 dark:text-green-400">
                            <TrendingUp size={16} />
                            <span className="ml-1 text-sm font-medium">{data.newKyc.change}%</span>
                          </div>
                        </div>
                        {/* Modified KYC */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-700 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Modified KYC</div>
                              <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">{data.modifiedKyc.count}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {data.modifiedKyc.myKra} My KRA • {data.modifiedKyc.interop} Interop
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-red-500 dark:text-red-400">
                            <TrendingDown size={16} />
                            <span className="ml-1 text-sm font-medium">{Math.abs(data.modifiedKyc.change)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Categories */}
                    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-gray-900 dark:text-gray-100 font-medium">Categories</h3>
                        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                          {['Individual', 'Non Individual'].map((type) => (
                            <button
                              key={type}
                              onClick={() => setCategoryView(type)}
                              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                                categoryView === type
                                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm'
                                  : 'text-gray-500 dark:text-gray-300'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-300">RI</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-300">NRI</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chart Section */}
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Today</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Yesterday</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setChartView('bar')}
                          className={`p-2 rounded ${chartView === 'bar' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                        >
                          <BarChart3 size={16} className="text-gray-600 dark:text-gray-300" />
                        </button>
                        <button 
                          onClick={() => setChartView('list')}
                          className={`p-2 rounded ${chartView === 'list' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                        >
                          <List size={16} className="text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>
                    <div className="w-full" style={{ height: 250 }}>
                      <ResponsiveBar
                        data={barData}
                        keys={['Today', 'Yesterday']}
                        indexBy="category"
                        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
                        padding={0.3}
                        groupMode="grouped"
                        colors={({ id }) => id === 'Today' ? '#1E40AF' : '#93C5FD'}
                        borderRadius={4}
                        axisBottom={{
                          tickSize: 0,
                          tickPadding: 12,
                          legend: 'Category',
                          legendPosition: 'middle',
                          legendOffset: 32
                        }}
                        axisLeft={{
                          tickSize: 0,
                          tickPadding: 12,
                          legend: 'Count',
                          legendPosition: 'middle',
                          legendOffset: -35
                        }}
                        enableLabel={false}
                        animate={true}
                        theme={{
                          axis: {
                            ticks: {
                              text: { fill: darkMode ? '#d1d5db' : '#6B7280', fontSize: 12 }
                            },
                            legend: {
                              text: { fill: darkMode ? '#d1d5db' : '#6B7280', fontSize: 14 }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* Status Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                    {data.statusCards.map((card, index) => {
                      const Icon = card.icon;
                      return (
                        <div key={index} className="text-center bg-white dark:bg-gray-800 p-2 sm:p-4 rounded-lg shadow-sm">
                          <div className={`w-12 h-12 ${card.bgColor} dark:bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2`}>
                            <Icon size={24} className={card.color} />
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{card.title}</div>
                          <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">{card.count}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-4 md:space-y-6">
                  {/* Solicited Section */}
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                      <div className="flex space-x-4">
                        <button 
                          className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1 text-sm font-medium"
                        >
                          Solicited
                        </button>
                        <button className="text-gray-500 dark:text-gray-300 text-sm">Unsolicited</button>
                      </div>
                      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                        {['Individual', 'Non Individual'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setSolicitedView(type)}
                            className={`px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                              solicitedView === type
                                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm'
                                : 'text-gray-500 dark:text-gray-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Circular Chart */}
                    <div className="mb-6">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                        <ResponsivePie
                          data={pieData}
                          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                          innerRadius={0.6}
                          padAngle={2}
                          cornerRadius={4}
                          colors={d => d.data.color}
                          borderWidth={2}
                          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                          enableArcLabels={false}
                          enableArcLinkLabels={false}
                          startAngle={90}
                          endAngle={450}
                          theme={{
                            labels: {
                              text: { fill: darkMode ? '#d1d5db' : '#374151' }
                            }
                          }}
                        />
                      </div>
                      <div className="text-center mt-4">
                        <div className="text-xs text-gray-600 dark:text-gray-300">Total</div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{data.totalKycs.toLocaleString()}</div>
                      </div>
                      {/* Legend */}
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">No Of PANs Solicited</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Received</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Consumed</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* PAN Stats */}
                  <div className="space-y-2 md:space-y-4">
                    {/* No. Of PANs Solicited */}
                    <div className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">No. Of PANs Solicited</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {data.panStats.solicitedMyKra} My KRA • {data.panStats.solicitedWithImage} With Image • {data.panStats.solicitedWithoutImage} Without Image
                            </div>
                          </div>
                        </div>
                        <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100">{data.panStats.solicitedTotal}</div>
                      </div>
                    </div>
                    {/* Data Received */}
                    <div className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <FileCheck size={20} className="text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Data Received</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {data.panStats.receivedMyKra} My KRA • {data.panStats.receivedWithImage} With Image • {data.panStats.receivedWithoutImage} Without Image
                            </div>
                          </div>
                        </div>
                        <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100">{data.panStats.receivedTotal}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;