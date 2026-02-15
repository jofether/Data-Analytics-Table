import React from 'react';

export function StatCard({ title, value, change, icon, color = 'indigo' }) {
  const colors = {
    indigo: 'bg-indigo-100 text-indigo-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    red: 'bg-red-100 text-red-600',
  };

  const changeColor = change >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <p className={`text-sm mt-2 ${changeColor}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
          </p>
        </div>
        {icon && (
          <div className={`${colors[color]} rounded-lg p-3 text-2xl`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
