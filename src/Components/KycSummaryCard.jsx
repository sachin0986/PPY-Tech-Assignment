import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KycSummaryCard = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
    <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">Total KYCs</h3>
    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
      {data.totalKycs.toLocaleString()}
    </div>
    <div className="space-y-4">
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
);

export default KycSummaryCard;