import React from 'react';

export function Input({ 
  label, 
  placeholder, 
  type = 'text', 
  value, 
  onChange, 
  error = null,
  disabled = false,
  className = '',
  icon = null,
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-4 py-2 ${icon ? 'pl-10' : 'pl-4'} border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
            error ? 'border-red-500' : ''
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
