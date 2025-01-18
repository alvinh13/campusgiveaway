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
        <div className='w-full blur-container bg-gradient-to-br from-indigo-50 via-white to-cyan-100'>
          <div className='blur-content'>
            <PrimaryNavbar />
            <div className=''>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </body>
  );
}
