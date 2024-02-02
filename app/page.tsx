import Navbar from '@/components/Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

export default function Home() {
  return (
    <>
      <header className='w-full fixed top-0 py-4 md:py-10'>
        <Navbar />
      </header>
      <main className='bg-gradient-to-tr from-black via-black to-slate-900'>
        <Hero />
        <About />
        <Projects />
        <div>
          <h2>Hello</h2>
        </div>
      </main>
    </>
  );
}
