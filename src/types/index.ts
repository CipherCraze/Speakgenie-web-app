export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ProgressData {
  completedLessons: number;
  learningStreak: number;
  totalXP: number;
  achievements: number;
}

export interface LessonData {
  id: string;
  title: string;
  type: 'vocabulary' | 'grammar' | 'speaking' | 'listening';
  xp: number;
  progress: number;
  status: 'completed' | 'active' | 'locked';
  isReview?: boolean;
}

export interface LessonNode {
  id: string;
  title: string;
  type: 'vocabulary' | 'grammar' | 'speaking' | 'listening';
  xp: number;
  status: 'completed' | 'active' | 'locked';
  isMilestone?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
}