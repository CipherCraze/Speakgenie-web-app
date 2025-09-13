'use client';

import React from 'react';
import { MainLayout } from '@/components/layout';
import { ProgressData, LessonData } from '@/types';

export default function DashboardPage() {
  const progressData: ProgressData = {
    completedLessons: 25,
    learningStreak: 7,
    totalXP: 3500,
    achievements: 12
  };

  const continueLearningLessons: LessonData[] = [
    {
      id: '1',
      title: 'Essential Vocabulary',
      type: 'vocabulary',
      xp: 20,
      progress: 60,
      status: 'active',
      isReview: true
    },
    {
      id: '2',
      title: 'Mastering Verb Tenses',
      type: 'grammar',
      xp: 30,
      progress: 30,
      status: 'active',
      isReview: false
    }
  ];

  return (
    <MainLayout currentPage="dashboard">
      <div className="p-6 space-y-8">
        {/* Your Learning Progress Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Learning Progress</h1>
          
          {/* Progress Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-sm font-medium text-blue-700 mb-2">Completed Lessons</h3>
              <div className="text-3xl font-bold text-blue-900 mb-2">{progressData.completedLessons}</div>
              <div className="text-sm text-green-600 font-medium">+10% from last week</div>
            </div>
            
            <div className="bg-pink-100 rounded-xl p-6 border border-pink-200">
              <h3 className="text-sm font-medium text-pink-700 mb-2">Learning Streak</h3>
              <div className="text-3xl font-bold text-pink-900 mb-2">{progressData.learningStreak} Days</div>
              <div className="text-sm text-pink-600 font-medium flex items-center gap-1">
                Keep the flame alive! <span>🔥</span>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-sm font-medium text-green-700 mb-2">Total XP</h3>
              <div className="text-3xl font-bold text-green-900 mb-2">{progressData.totalXP.toLocaleString()}</div>
              <div className="text-sm text-green-600 font-medium">+200 XP today</div>
            </div>
            
            <div className="bg-yellow-100 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-sm font-medium text-yellow-700 mb-2">Achievements</h3>
              <div className="text-3xl font-bold text-yellow-900 mb-2">{progressData.achievements}</div>
              <div className="text-sm text-yellow-600 font-medium">Polyglot in the making!</div>
            </div>
          </div>
        </div>

        {/* Continue Learning Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Continue Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vocabulary Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">VOCABULARY</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Vocabulary</h3>
                  <p className="text-gray-600 text-sm">Learn key words for everyday conversations.</p>
                </div>
                <div className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-sm font-medium">
                  +20 XP
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors">
                Review
              </button>
            </div>

            {/* Grammar Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">GRAMMAR</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mastering Verb Tenses</h3>
                  <p className="text-gray-600 text-sm">Understand and use different verb tenses correctly.</p>
                </div>
                <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                  +30 XP
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}