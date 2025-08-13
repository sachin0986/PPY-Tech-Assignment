import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { BarChart3, List } from 'lucide-react';

const BarChartCard = ({ barData, chartView, setChartView, darkMode }) => (
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
);

export default BarChartCard;