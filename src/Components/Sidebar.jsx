import React from 'react';
import { X } from 'lucide-react';
import { menuItems } from '../utils/mockData';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <div className={`fixed lg:static z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 min-h-screen border-r border-gray-200 dark:border-gray-700`}>
    <div className="p-4 sm:p-6">
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
);

export default Sidebar;