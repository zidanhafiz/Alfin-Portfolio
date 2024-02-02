import Navbar from '@/components/Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
  return (
    <>
      <header className='w-full fixed top-0 py-4 md:py-10 z-50'>
        <Navbar />
      </header>
      <main className='bg-gradient-to-tr from-black via-black to-slate-900'>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
