import React from 'react';
import { NavItem } from '@/types';

interface SidebarNavItemProps {
  item: NavItem;
  onClick?: () => void;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ item, onClick }) => {
  const baseClasses = "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors";
  const activeClasses = "bg-green-500 text-white";
  const inactiveClasses = "text-gray-600 hover:bg-gray-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${item.isActive ? activeClasses : inactiveClasses} w-full text-left`}
    >
      <span className="text-lg w-5 flex justify-center">{item.icon}</span>
      <span>{item.label}</span>
    </button>
  );
};