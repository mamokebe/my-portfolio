import { projects } from '../data';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <Reveal>
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sunset-950/70 dark:text-sunset-100/70">
            A selection of full-stack applications I&apos;ve designed and built.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="card group flex h-full flex-col overflow-hidden !p-0">
                {/* Thumbnail */}
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient} sm:h-48`}>
                  {/* <div aria-hidden="true" className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/25 blur-sm transition-transform duration-500 group-hover:scale-125" /> */}
                  {/* <div aria-hidden="true" className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15" /> */}
                  <img
                    src={p.image || '/projects/placeholder.png'}
                    alt={p.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-10"
                  />
                  <span className="absolute bottom-4 left-5 text-4xl font-extrabold text-white/90 drop-shadow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sunset-950/70 dark:text-sunset-100/70">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-sunset-500/10 px-3 py-1 text-xs font-semibold text-sunset-700 dark:text-sunset-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-4 text-sm font-semibold">
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sunset-600 hover:underline dark:text-sunset-300">
                      Live demo ↗
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-sunset-950/70 hover:underline dark:text-sunset-100/70">
                      Source code ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
