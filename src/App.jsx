import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import useTheme from './hooks/useTheme';
import { profile } from './data';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      {/* <footer className="border-t border-sunset-200/70 py-8 text-center text-sm text-sunset-950/60 dark:border-white/10 dark:text-sunset-100/60">
      
        © {new Date().getFullYear()} {profile.name}. All rights reserved. Built with React, Vite &amp; Tailwind CSS.
      </footer> */}
      <footer className="border-t border-sunset-200/70 py-8 text-center text-sm text-sunset-950/60 dark:border-white/10 dark:text-sunset-100/60">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
          Designed &amp; Developed by{' '}
          <a
            href="https://fcsorg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunset-600 hover:text-sunset-700 dark:text-sunset-300 dark:hover:text-sunset-200"
          >
            fcsorg.com
          </a>
        </p>
      </footer>
    </>
  );
}
