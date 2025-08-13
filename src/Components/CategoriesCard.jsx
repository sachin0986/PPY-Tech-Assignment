import React from 'react';

const CategoriesCard = ({ categoryView, setCategoryView }) => (
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
);

export default CategoriesCard;