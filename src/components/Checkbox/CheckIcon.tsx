import React from 'react';

export const CheckIcon: React.FC<{ className?: string }> = ({ className = 'rsp-h-3.5 rsp-w-3.5' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    stroke="currentColor" 
    strokeWidth="1"
  >
    <path 
      fillRule="evenodd" 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      clipRule="evenodd"
    />
  </svg>
);