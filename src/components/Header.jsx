import React from 'react';
import { Button } from './Button';

export function Header({ title, subtitle, action = null, showSearch = true }) {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-6 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
        
        {showSearch && (
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
            <Button variant="outline" size="md">
              🔍
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
