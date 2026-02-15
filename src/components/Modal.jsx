import React from 'react';
import { Button } from './Button';

export function Modal({ isOpen, onClose, title, children, footer = null, size = 'md' }) {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-lg shadow-xl ${sizes[size]} w-full max-h-[90vh] overflow-y-auto`}>
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="px-6 py-4">
            {children}
          </div>
          {footer && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
