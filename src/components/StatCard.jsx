import React from 'react';

export function StatCard({ title, value, change, icon, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        
        <div className={`p-3 rounded-lg bg-${color}-50 text-${color}-600`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-center text-sm">
        <span className={change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
          {change}
        </span>
        <span className="text-gray-400 ml-2">from last month</span>
      </div>
    </div>
  );
}
