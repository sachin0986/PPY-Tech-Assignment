import React from "react";

const SkeletonChart = () => {
    return (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
    <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
  </div>
    )
}

export default SkeletonChart;