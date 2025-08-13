import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { timeRanges } from '../utils/mockData';

const Filters = ({ activeTab, setActiveTab }) => (
  <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
        <span>Home</span> <span className="text-gray-400 dark:text-gray-500">›</span> <span>Dashboard</span>
      </div>
      <div className="flex items-center flex-wrap justify-end gap-2">
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
        <div className="flex items-center space-x-2 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2">
          <Calendar size={16} className="text-gray-400 dark:text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">12 Feb 2025</span>
          <ChevronDown size={16} className="text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </div>
  </div>
);

export default Filters;