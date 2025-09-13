# SpeakGenie Web App

A modern language learning application built with Next.js, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── login/             # Login page (Frame 1)
│   ├── dashboard/         # Dashboard page (Frame 2)
│   ├── learning-path/     # Learning path page (Frame 3)
│   ├── globals.css        # Global styles with brand colors
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page (redirects to login)
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── SidebarNavItem.tsx
│   │   ├── ProgressCard.tsx
│   │   ├── LessonCard.tsx
│   │   └── LessonNode.tsx
│   └── layout/           # Layout components
│       └── MainLayout.tsx
└── types/                # TypeScript type definitions
    └── index.ts
```

## 🎨 Design System

### Brand Colors
- **Primary Green**: `green-500` (#10b981) - Main brand color
- **Secondary Green**: `green-600` (#059669) - Hover states
- **Accent Colors**: 
  - Blue gradient: `from-blue-400 to-blue-600`
  - Pink gradient: `from-pink-400 to-rose-500`
  - Orange gradient: `from-orange-400 to-pink-500`
  - Yellow gradient: `from-yellow-400 to-amber-500`

### Component Status Colors
- **Completed**: Green gradient (`from-green-400 to-emerald-500`)
- **Active**: Pink-orange gradient (`from-pink-400 to-orange-400`)
- **Locked**: Gray (`bg-gray-300`)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Frame 1: Login Page (`/login`)
- Clean login form with email/password inputs
- "Remember for 30 days" checkbox
- Google Sign-in integration
- SpeakGenie logo and branding
- Responsive design with centered card layout

### Frame 2: Dashboard (`/dashboard`)
- Progress overview with 4 stat cards:
  - Completed Lessons
  - Learning Streak
  - Total XP
  - Achievements
- Continue Learning section with lesson cards
- Recent Activity timeline
- Quick Actions grid

### Frame 3: Learning Path (`/learning-path`)
- Vertical timeline with lesson nodes
- Different node states (completed, active, locked)
- Milestone markers
- Progress tracking with percentage
- Learning tips and next steps

## 🧩 Reusable Components

### UI Components

#### `SidebarNavItem`
Navigation items for the sidebar with active state highlighting.

#### `ProgressCard`
Stat cards with gradient backgrounds in different color variants.

#### `LessonCard`
Cards showing lesson information, progress, and action buttons.

#### `LessonNode`
Timeline nodes for the learning path with status-based styling.

### Layout Components

#### `MainLayout`
Shared layout for authenticated pages including:
- Sidebar navigation with logo and streak info
- Top search bar and user profile
- Main content area

## 🎯 Key Features

- **Responsive Design**: Works on desktop and mobile devices
- **Brand Consistency**: Unified color scheme and typography
- **Interactive Elements**: Hover states and transitions
- **Progress Tracking**: Visual progress indicators and statistics
- **Navigation**: Intuitive sidebar navigation with active states
- **Accessibility**: Focus rings and semantic HTML structure

## 🛠 Technology Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI**: Custom components with consistent design system
- **Icons**: Emoji-based icons for simplicity

## 🎨 Tailwind Utilities Used

- Grid layouts: `grid grid-cols-2 gap-4`
- Flexbox: `flex items-center justify-center`
- Gradients: `bg-gradient-to-r from-green-400 to-emerald-500`
- Shadows: `shadow-md`, `shadow-lg`
- Rounded corners: `rounded-xl`, `rounded-full`
- Spacing: `space-y-4`, `gap-6`
- Responsive: `md:grid-cols-2`, `lg:grid-cols-4`

## 📝 Future Enhancements

- Add authentication system
- Implement actual lesson content
- Add more interactive features
- Enhance accessibility
- Add unit tests
- Implement API integration

## 🔧 Development

To add new features:

1. **New Pages**: Create in `src/app/[page-name]/page.tsx`
2. **Components**: Add to `src/components/ui/` or `src/components/layout/`
3. **Types**: Define in `src/types/index.ts`
4. **Styles**: Use Tailwind classes or add to `globals.css`

The application follows Next.js app router conventions and uses TypeScript for type safety.