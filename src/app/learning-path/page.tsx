'use client';

import React from 'react';
import { MainLayout } from '@/components/layout';
import { LessonNode } from '@/components/ui';
import { LessonNode as LessonNodeType } from '@/types';

export default function LearningPathPage() {
  const learningPath: LessonNodeType[] = [
    {
      id: '1',
      title: 'Basic Words',
      type: 'vocabulary',
      xp: 50,
      status: 'completed'
    },
    {
      id: '2',
      title: 'Pronunciation Practice',
      type: 'speaking',
      xp: 75,
      status: 'completed'
    },
    {
      id: '3',
      title: 'Present Tense Rules',
      type: 'grammar',
      xp: 100,
      status: 'active'
    },
    {
      id: 'milestone-1',
      title: 'Beginner Complete',
      type: 'vocabulary', // This will be overridden by isMilestone
      xp: 0,
      status: 'active',
      isMilestone: true
    },
    {
      id: '4',
      title: 'Audio Comprehension',
      type: 'listening',
      xp: 75,
      status: 'locked'
    },
    {
      id: '5',
      title: 'Advanced Vocabulary',
      type: 'vocabulary',
      xp: 100,
      status: 'locked'
    },
    {
      id: '6',
      title: 'Conversation Practice',
      type: 'speaking',
      xp: 125,
      status: 'locked'
    }
  ];

  const handleNodeClick = (nodeId: string) => {
    const node = learningPath.find(n => n.id === nodeId);
    if (node && node.status !== 'locked') {
      console.log('Starting lesson:', nodeId);
      // Handle lesson/milestone click logic
    }
  };

  const getProgressStats = () => {
    const completed = learningPath.filter(node => node.status === 'completed' && !node.isMilestone).length;
    const total = learningPath.filter(node => !node.isMilestone).length;
    const percentage = Math.round((completed / total) * 100);
    
    return { completed, total, percentage };
  };

  const stats = getProgressStats();

  return (
    <MainLayout currentPage="learning-path">
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learning Path</h1>
          <p className="text-gray-600 mt-1">Follow your structured learning journey</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Overall Progress</h2>
              <p className="text-gray-600">You've completed {stats.completed} of {stats.total} lessons</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">{stats.percentage}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-3 bg-gray-200 rounded-full">
            <div 
              className="absolute h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Your Learning Journey</h2>
          
          <div className="flex flex-col items-center space-y-8">
            {learningPath.map((node, index) => (
              <LessonNode
                key={node.id}
                node={node}
                isLast={index === learningPath.length - 1}
                onClick={() => handleNodeClick(node.id)}
              />
            ))}
          </div>
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
              💡
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learning Tips</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Complete lessons in order to build your foundation</li>
                <li>• Practice daily to maintain your learning streak</li>
                <li>• Review completed lessons to reinforce your knowledge</li>
                <li>• Reach milestones to unlock new learning areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-900">Current Focus</h3>
            </div>
            <p className="text-gray-600 mb-4">
              You're currently working on grammar fundamentals. Master the present tense to unlock more advanced topics.
            </p>
            <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
              Continue Grammar
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                🔮
              </div>
              <h3 className="text-lg font-bold text-gray-900">Coming Next</h3>
            </div>
            <p className="text-gray-600 mb-4">
              After completing your current lesson, you'll unlock listening comprehension exercises to test your understanding.
            </p>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md font-medium cursor-not-allowed">
              Locked
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}