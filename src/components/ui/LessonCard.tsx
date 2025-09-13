import React from 'react';
import { LessonData } from '@/types';

interface LessonCardProps {
  lesson: LessonData;
  onStart?: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, onStart }) => {
  const getGradientClass = () => {
    switch (lesson.type) {
      case 'vocabulary':
        return 'bg-gradient-to-r from-blue-400 to-blue-600';
      case 'grammar':
        return 'bg-gradient-to-r from-orange-400 to-pink-500';
      case 'speaking':
        return 'bg-gradient-to-r from-green-400 to-emerald-500';
      case 'listening':
        return 'bg-gradient-to-r from-purple-400 to-purple-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  const getTypeIcon = () => {
    switch (lesson.type) {
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
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${getGradientClass()} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>
          {getTypeIcon()}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 capitalize">{lesson.type}</h3>
          <p className="text-sm text-gray-500">{lesson.title}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{lesson.progress}%</span>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div 
            className="absolute h-full bg-green-500 rounded-full"
            style={{ width: `${lesson.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{lesson.xp} XP</span>
        </div>
        <button
          onClick={onStart}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            lesson.isReview 
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
              : 'bg-green-500 text-white hover:bg-green-600'
          } transition-colors`}
        >
          {lesson.isReview ? 'Review' : 'Start'}
        </button>
      </div>
    </div>
  );
};