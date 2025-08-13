import React from 'react';
import { Search, Bell, Menu, Moon, Sun, ChevronDown } from 'lucide-react';

const Header = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => (
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
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Search intermediaries" 
            className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 dark:bg-gray-900 text-sm w-40 sm:w-64 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600 dark:text-gray-300" />}
        </button>
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
);

export default Header;