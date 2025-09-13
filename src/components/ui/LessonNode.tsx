import React from 'react';
import { LessonNode as LessonNodeType } from '@/types';

interface LessonNodeProps {
  node: LessonNodeType;
  isLast?: boolean;
  onClick?: () => void;
}

export const LessonNode: React.FC<LessonNodeProps> = ({ node, isLast, onClick }) => {
  const getNodeClasses = () => {
    const baseClasses = "w-20 h-20 flex items-center justify-center rounded-full shadow-md text-xl font-bold cursor-pointer transition-transform hover:scale-105";
    
    switch (node.status) {
      case 'completed':
        return `${baseClasses} bg-gradient-to-r from-green-400 to-emerald-500 text-white`;
      case 'active':
        return `${baseClasses} bg-gradient-to-r from-pink-400 to-orange-400 text-white`;
      case 'locked':
        return `${baseClasses} bg-gray-300 text-gray-600 opacity-70 cursor-not-allowed`;
      default:
        return `${baseClasses} bg-gray-200 text-gray-600`;
    }
  };

  const getNodeIcon = () => {
    if (node.isMilestone) {
      return '🏆';
    }
    
    if (node.status === 'completed') {
      return '✓';
    }
    
    if (node.status === 'locked') {
      return '🔒';
    }

    switch (node.type) {
      case 'vocabulary':
        return '📖';
      case 'grammar':
        return '⚡';
      case 'speaking':
        return '🗣️';
      case 'listening':
        return '👂';
      default:
        return '📚';
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Lesson Node */}
      <div
        className={getNodeClasses()}
        onClick={node.status !== 'locked' ? onClick : undefined}
      >
        {getNodeIcon()}
      </div>
      
      {/* Lesson Info */}
      <div className="mt-3 text-center max-w-[100px]">
        <h4 className="text-sm font-semibold text-gray-900 capitalize">
          {node.isMilestone ? 'Milestone' : node.type}
        </h4>
        <p className="text-xs text-gray-500 mt-1">{node.title}</p>
        {!node.isMilestone && (
          <span className="text-xs text-gray-400">{node.xp} XP</span>
        )}
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="h-16 w-[2px] bg-gray-200 mt-4" />
      )}
    </div>
  );
};