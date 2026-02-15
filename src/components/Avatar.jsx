import React from 'react';

export function Avatar({ name, src, size = 'md', color = 'indigo' }) {
  const colors = {
    indigo: 'bg-indigo-100 text-indigo-700',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    pink: 'bg-pink-100 text-pink-700',
    red: 'bg-red-100 text-red-700',
  };

  const sizes = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-16 w-16 text-2xl',
  };

  return (
    <div className={`${sizes[size]} ${colors[color]} rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
      {src ? (
        <img src={src} alt={name} className="w-full h-full rounded-full object-cover" />
      ) : (
        name?.charAt(0).toUpperCase()
      )}
    </div>
  );
}
