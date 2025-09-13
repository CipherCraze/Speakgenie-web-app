'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page by default
    // In a real app, you'd check authentication status here
    router.push('/login');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image
            src="/Speakgenielogo.png"
            alt="SpeakGenie Logo"
            width={280}
            height={280}
            className="rounded-lg"
          />
          
        </div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
