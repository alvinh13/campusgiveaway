import type { Metadata } from 'next';
import { AuthProvider } from '@/context/authContext';
import './globals.css';
import { CategorySelectProvider } from '@/context/categoryContext';

export const metadata: Metadata = {
  title: 'Campus Giveaway',
  description: `Giveaway what you don't need to someone who does.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AuthProvider>
        <CategorySelectProvider>
          <body>{children}</body>
        </CategorySelectProvider>
      </AuthProvider>
    </html>
  );
}
