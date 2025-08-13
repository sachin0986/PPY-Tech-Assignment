import React from 'react';

const StatusCardsGrid = ({ statusCards }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
    {statusCards.map((card, index) => {
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
);

export default StatusCardsGrid;