'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarNavItem } from '@/components/ui';
import { NavItem, Badge } from '@/types';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '▦',
      href: '/dashboard',
      isActive: currentPage === 'dashboard'
    },
    {
      id: 'learning-path',
      label: 'Learning Path',
      icon: '▨',
      href: '/learning-path',
      isActive: currentPage === 'learning-path'
    },
    {
      id: 'ai-chat',
      label: 'AI Chat',
      icon: '💬',
      href: '/ai-chat',
      isActive: currentPage === 'ai-chat'
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: '🏆',
      href: '/achievements',
      isActive: currentPage === 'achievements'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: '👤',
      href: '/profile',
      isActive: currentPage === 'profile'
    }
  ];

  const recentBadges: Badge[] = [
    { id: '1', name: 'Vocabulary Master', icon: 'V', color: 'bg-orange-500' },
    { id: '2', name: 'Grammar Expert', icon: '🧠', color: 'bg-purple-500' },
    { id: '3', name: 'Speaking Pro', icon: '�', color: 'bg-green-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/Speakgenielogo.png"
              alt="SpeakGenie Logo"
              width={170}
              height={60}
              className="object-contain"
            />
          </div>
          
          {/* Streak Box */}
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">🔥</span>
                <span className="text-gray-800 font-semibold">7 Day Streak</span>
              </div>
              <span className="text-orange-500">🔥</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <SidebarNavItem item={item} />
              </Link>
            ))}
          </div>
        </nav>

        {/* Recent Badges */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Recent Badges</h3>
          <div className="flex gap-2">
            {recentBadges.map((badge) => (
              <div
                key={badge.id}
                className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md`}
                title={badge.name}
              >
                {badge.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm"
                  placeholder="Search for lessons, topics..."
                />
              </div>
            </div>

            {/* Promotional Banner */}
            <div className="ml-6">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                7 Day Free + 50% off
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};