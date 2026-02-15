import React from 'react';

export function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠', active: true },
    { name: 'Analytics', icon: '📊', active: false },
    { name: 'Users', icon: '👥', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <span className="text-xl font-bold text-blue-600">DataViz</span>
      </div>

      {/* [BUG - SPACING] Negative margin pulls the menu up into the logo area. */}
      {/* [BUG - LAYOUT] 'flex-row' forces items to stack horizontally causing overflow/mess. */}
      {/* [FIX] <nav className="flex-1 p-4 space-y-1 overflow-y-auto"> */}
      <nav className="flex-1 p-4 -mt-20 flex flex-row flex-wrap space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full
              ${item.active 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 text-red-600 hover:bg-red-50 w-full px-4 py-3 rounded-lg transition-colors">
          <span>🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}