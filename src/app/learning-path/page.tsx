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
      type: 'vocabulary',
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
      <div className="space-y-8 relative">
        {/* Floating background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-25 animate-pulse"></div>
        </div>

        {/* Page Header */}
        <div className="text-center relative z-10">
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Learning Path
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Embark on your structured journey to language mastery. Each step builds upon the last for 
            <span className="font-semibold text-emerald-600"> effective learning</span>.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-50 relative overflow-hidden backdrop-blur-sm bg-opacity-95">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-full -m-20 animate-spin-slow"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-full -m-16 animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h2>
                <p className="text-gray-600 text-lg">
                  You've completed <span className="font-bold text-emerald-600 text-xl">{stats.completed}</span> of{' '}
                  <span className="font-bold text-gray-800 text-xl">{stats.total}</span> lessons
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
                  {stats.percentage}%
                </div>
                <div className="text-sm text-gray-500 font-semibold tracking-wider uppercase">Complete</div>
              </div>
            </div>
            
            {/* Enhanced Progress Bar */}
            <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="absolute h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{ width: `${stats.percentage}%` }}
              >
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-full bg-white bg-opacity-10 rounded-full"></div>
              </div>
            </div>
            
            {/* Progress milestones */}
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span className="font-medium">Beginner</span>
              <span className="font-medium">Intermediate</span>
              <span className="font-medium">Advanced</span>
              <span className="font-medium">Expert</span>
            </div>
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-50 relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative mb-4">
              Your Learning Journey
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Progress through each lesson at your own pace and unlock new challenges
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced decorative timeline line */}
            <div className="absolute left-7 top-4 bottom-4 w-2 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 rounded-full z-0 shadow-lg">
              <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-col space-y-12 relative z-10">
              {learningPath.map((node, index) => (
                <div 
                  key={node.id} 
                  className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 group-hover:border-gray-200 transition-all duration-300 group-hover:bg-white">
                    <LessonNode
                      node={node}
                      isLast={index === learningPath.length - 1}
                      onClick={() => handleNodeClick(node.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Learning Tips */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-spin-slow"></div>
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl transform hover:scale-110 transition-transform duration-300">
              💡
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Learning Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-white bg-opacity-60 rounded-xl backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></span>
                  <span className="text-gray-700 font-medium">Complete lessons systematically to build strong foundations</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white bg-opacity-60 rounded-xl backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></span>
                  <span className="text-gray-700 font-medium">Practice daily for consistency and streak maintenance</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white bg-opacity-60 rounded-xl backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></span>
                  <span className="text-gray-700 font-medium">Review completed lessons to reinforce knowledge</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white bg-opacity-60 rounded-xl backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></span>
                  <span className="text-gray-700 font-medium">Reach milestones to unlock advanced challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full -m-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900">Current Focus</h3>
            </div>
            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
              You're currently working on <span className="font-semibold text-pink-600">grammar fundamentals</span>. 
              Master the present tense to unlock more advanced topics and conversation skills.
            </p>
            <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 hover:from-pink-500 hover:to-orange-500 w-full sm:w-auto">
              Continue Grammar Lesson →
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full -m-10 opacity-60"></div>
            
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg opacity-75">
                🔮
              </div>
              <h3 className="text-xl font-bold text-gray-900">Coming Next</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              After completing your current lesson, you'll unlock <span className="font-semibold text-purple-600">listening comprehension</span> exercises to test your understanding in real-world scenarios.
            </p>
            <button className="bg-gray-100 text-gray-400 px-6 py-3 rounded-2xl font-semibold cursor-not-allowed w-full sm:w-auto opacity-60">
              🔒 Available Soon
            </button>
          </div>
        </div>

        {/* Enhanced Motivation Quote */}
        <div className="text-center py-8">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
            <p className="text-gray-700 italic text-lg font-medium relative z-10 max-w-2xl">
              "The beautiful thing about learning is that nobody can take it away from you."
            </p>
            <p className="text-gray-500 text-sm mt-2 relative z-10">- B.B. King</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}