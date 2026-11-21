import { certificates, experience, profile } from '../data';
import Reveal from './Reveal';
import { DownloadIcon } from './Hero';

export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-transparent via-sunset-100/50 to-transparent dark:via-sunset-900/20">
      <div className="section">
        <Reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">
            My <span className="gradient-text">journey</span>
          </h2>
        </Reveal>

        {/* Timeline */}
        <ol className="relative mt-10 space-y-8 border-l-2 border-sunset-300/60 pl-6 dark:border-sunset-700/60 sm:pl-8">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.role + item.period} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+7px)] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-sunset-400 to-sunset-700 ring-4 ring-sunset-50 dark:ring-sunset-950 sm:-left-[calc(2rem+7px)]"
              />
              <div className="card">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <span className="text-sm font-semibold text-sunset-600 dark:text-sunset-300">{item.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-sunset-950/60 dark:text-sunset-100/60">{item.company}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-sunset-950/75 marker:text-sunset-500 dark:text-sunset-100/75">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* CV + certificates */}
        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full bg-gradient-to-br from-sunset-400/20 to-sunset-700/20">
              <h3 className="text-xl font-bold">Curriculum Vitae (CV)</h3>
              <p className="mt-2 text-sm leading-relaxed text-sunset-950/70 dark:text-sunset-100/70">
                Get the full details of my experience, education and skills.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
                  View CV
                </a>
                <a href={profile.cv} download className="btn btn-outline">
                  <DownloadIcon /> Download
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="card h-full">
              <h3 className="text-xl font-bold">Certificates</h3>
              <ul className="mt-4 divide-y divide-sunset-200/70 dark:divide-white/10">
                {certificates.map((c) => (
                  <li key={c.title} className="flex flex-col gap-3 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-sunset-950/60 dark:text-sunset-100/60">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2 text-sm font-semibold">
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-sunset-500/40 px-4 py-1.5 text-sunset-700 transition hover:bg-sunset-500/10 dark:text-sunset-300"
                      >
                        View
                      </a>
                      <a
                        href={c.file}
                        download
                        className="rounded-full bg-sunset-500/10 px-4 py-1.5 text-sunset-700 transition hover:bg-sunset-500/20 dark:text-sunset-300"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
