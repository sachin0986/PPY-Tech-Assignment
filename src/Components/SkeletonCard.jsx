import React from "react";

const SkeletonCard = () => {
    return (
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
  </div>
    )
}

export default SkeletonCard;