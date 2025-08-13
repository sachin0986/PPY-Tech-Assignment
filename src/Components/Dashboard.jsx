import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Filters from './Filters';
import KycSummaryCard from './KycSummaryCard';
import CategoriesCard from './CategoriesCard';
import BarChartCard from './BarChartCard';
import StatusCardsGrid from './StatusCardsGrid';
import SolicitedPieCard from './SolicitedPieCard';
import PanStatsCards from './PanStatsCards';
import SkeletonCard from './SkeletonCard';
import SkeletonChart from './SkeletonChart';
import { mockData, COLORS } from '../utils/mockData';

const Dashboard = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setData(mockData);
      setLoading(false);
    };
    fetchData();
  }, [activeTab]);

  const barData = data
    ? data.barChartData.map(d => ({
        category: d.name,
        Today: d.Today,
        Yesterday: d.Yesterday
      }))
    : [];

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
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 lg:ml-0">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
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
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <KycSummaryCard data={data} />
                    <CategoriesCard categoryView={categoryView} setCategoryView={setCategoryView} />
                  </div>
                  <BarChartCard barData={barData} chartView={chartView} setChartView={setChartView} darkMode={darkMode} />
                  <StatusCardsGrid statusCards={data.statusCards} />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <SolicitedPieCard pieData={pieData} data={data} darkMode={darkMode} solicitedView={solicitedView} setSolicitedView={setSolicitedView} />
                  <PanStatsCards data={data} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;