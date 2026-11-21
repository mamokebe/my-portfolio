import { profile } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Sunset glow background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sunset-100 via-sunset-50 to-sunset-50 dark:from-sunset-900/60 dark:via-sunset-950 dark:to-sunset-950" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-sunset-300 to-sunset-600 opacity-40 blur-3xl dark:opacity-30 sm:h-96 sm:w-96" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-sunset-700 to-sunset-400 opacity-20 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-2 md:pt-24">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          {/* <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sunset-500/30 bg-sunset-500/10 px-4 py-1.5 text-sm font-semibold text-sunset-700 dark:text-sunset-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sunset-500" />
            Available for new projects
          </p> */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-3 text-xl font-bold text-sunset-700 dark:text-sunset-300 sm:text-2xl">{profile.role}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sunset-950/70 dark:text-sunset-100/70 sm:text-lg md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={profile.cv} download className="btn btn-outline">
              <DownloadIcon /> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-sunset-950/60 underline-offset-4 transition hover:text-sunset-600 hover:underline dark:text-sunset-100/60 dark:hover:text-sunset-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative animate-float">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sunset-400 via-sunset-600 to-sunset-700 opacity-80 blur-md"
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-sunset-50 bg-sunset-100 shadow-2xl dark:border-sunset-950 dark:bg-sunset-900 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Falls back to the placeholder until public/profile.jpg exists
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.svg';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sunset-600 transition hover:text-sunset-700 dark:text-sunset-300 md:block"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
