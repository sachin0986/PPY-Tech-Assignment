import React from 'react';
import { FileText, FileCheck } from 'lucide-react';

const PanStatsCards = ({ data }) => (
  <div className="space-y-2 md:space-y-4">
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
);

export default PanStatsCards;