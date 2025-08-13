import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const SolicitedPieCard = ({ pieData, data, darkMode, solicitedView, setSolicitedView }) => (
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
);

export default SolicitedPieCard;