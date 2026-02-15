import React from 'react';

export function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Data Analytics Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.75A2.75 2.75 0 003 4.25v11A2.75 2.75 0 005.75 18h8.5A2.75 2.75 0 0017 15.25v-11A2.75 2.75 0 0014.25 1.5H10.5z" />
              <path d="M6 1.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 1.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 6.5h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}
