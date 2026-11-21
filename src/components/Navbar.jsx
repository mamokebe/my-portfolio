import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Shadow/blur once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when resizing to desktop
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const linkClass = (id) =>
    `relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'text-sunset-600 dark:text-sunset-300'
        : 'text-sunset-950/70 hover:text-sunset-600 dark:text-sunset-100/70 dark:hover:text-sunset-300'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-sunset-200/60 bg-sunset-50/85 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-sunset-950/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="text-xl font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="h-6 w-6" />
            <p>
              <span className="gradient-text">{profile.name}</span>
              <span className="text-sunset-500">.</span>
            </p>
            
          </div>
          
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'page' : undefined}>
                {label}
                {active === id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sunset-400 to-sunset-700" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-sunset-500/40 text-sunset-700 transition hover:bg-sunset-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-500 dark:border-sunset-400/40 dark:text-sunset-300 md:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 pb-5 pt-1 sm:px-8">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    active === id
                      ? 'bg-sunset-500/10 text-sunset-600 dark:text-sunset-300'
                      : 'text-sunset-950/80 hover:bg-sunset-500/10 dark:text-sunset-100/80'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
