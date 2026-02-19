import React from 'react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm h-16 -z-10 relative">
      <div className="px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            ☰
          </button>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">🔔</button>
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              JD
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}