import { about } from '../data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <Reveal>
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">
            Building the web, <span className="gradient-text">end to end</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <Reveal className="space-y-5 text-base leading-relaxed text-sunset-950/75 dark:text-sunset-100/75 sm:text-lg md:col-span-3">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={150} className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
            {about.stats.map((s) => (
              <div key={s.label} className="card text-center md:flex md:items-center md:justify-between md:text-left">
                <p className="gradient-text text-3xl font-extrabold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sunset-950/60 dark:text-sunset-100/60 sm:text-sm md:mt-0">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
