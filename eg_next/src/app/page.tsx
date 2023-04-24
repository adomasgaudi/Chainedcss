import Image from 'next/image';
import { Inter } from 'next/font/google';
import TestComp from './TestComp';
import Sidebar from '@/shared/components/newcomps/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> hi next 2 </h1>
      <TestComp></TestComp>
      <Sidebar />
    </main>
  );
}
