import type { Metadata } from 'next';
import '../globals.css';
import PrimaryNavbar from '@/components/layout/primaryNavbar';
import Footer from '@/components/layout/footer';

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
    <body>
      <div className='flex '>
        <div className='w-full blur-container '>
          <div className='blur-content text-gray-700  bg-gradient-to-r from-indigo-50/70 from-10% via-white via-30% to-green-50 to-90%'>
            <PrimaryNavbar />
            <div className=''>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </body>
  );
}
