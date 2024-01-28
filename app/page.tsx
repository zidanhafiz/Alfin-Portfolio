import Navbar from '@/components/Navbar';
import Hero from './Hero';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <header className='w-full fixed top-0 py-4 md:py-10'>
        <Navbar />
      </header>
      <main className='bg-gradient-to-tr from-black via-black to-slate-900 min-h-screen'>
        <Hero />
        <Hero />
      </main>
    </>
  );
}
