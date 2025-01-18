'use client';
import LandingPage from '@/components/landingPage/landingPage';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingPage />
    </main>
  );
}
