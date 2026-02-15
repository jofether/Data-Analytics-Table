import React from 'react';

export function Card({ children, className = '', title = null, subtitle = null, footer = null }) {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          {title && <h2 className="text-lg font-bold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
}
