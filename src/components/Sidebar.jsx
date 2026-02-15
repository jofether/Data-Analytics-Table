import React from 'react';

export function Sidebar({ isOpen, onClose }) {
  const [active, setActive] = React.useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'reports', label: 'Reports', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help', icon: '❓' },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white transform transition-transform duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <div className="p-6 flex justify-between items-center border-b border-indigo-500">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <button onClick={onClose} className="md:hidden text-xl">✕</button>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              active === item.id
                ? 'bg-white/20 border-l-4 border-white'
                : 'hover:bg-white/10'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-500">
        <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">J</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">John Doe</p>
            <p className="text-xs text-indigo-200">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
