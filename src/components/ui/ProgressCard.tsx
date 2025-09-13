import React from 'react';

interface ProgressCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  variant: 'blue' | 'pink' | 'green' | 'yellow';
  icon?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  variant, 
  icon 
}) => {
  const variantClasses = {
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
    pink: 'bg-gradient-to-r from-pink-400 to-rose-500',
    green: 'bg-gradient-to-r from-green-400 to-emerald-500',
    yellow: 'bg-gradient-to-r from-yellow-400 to-amber-500'
  };

  return (
    <div className={`${variantClasses[variant]} text-white rounded-xl p-6 shadow-md`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium opacity-90">{title}</h3>
        {icon && <span className="text-xl opacity-80">{icon}</span>}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      {subtitle && <div className="text-xs opacity-75">{subtitle}</div>}
    </div>
  );
};