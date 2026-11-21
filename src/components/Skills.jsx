// import { useEffect, useRef, useState } from 'react';
// import { skillGroups, tools } from '../data';
// import Reveal from './Reveal';

// function SkillBar({ name, level, animate }) {
//   return (
//     <div>
//       <div className="mb-1.5 flex justify-between text-sm font-semibold">
//         <span>{name}</span>
//         <span className="text-sunset-600 dark:text-sunset-300">{level}%</span>
//       </div>
//       <div
//         className="h-2 overflow-hidden rounded-full bg-sunset-200/70 dark:bg-white/10"
//         role="progressbar"
//         aria-label={name}
//         aria-valuenow={level}
//         aria-valuemin={0}
//         aria-valuemax={100}
//       >
//         <div
//           className="h-full rounded-full bg-gradient-to-r from-sunset-400 via-sunset-600 to-sunset-700 transition-[width] duration-1000 ease-out"
//           style={{ width: animate ? `${level}%` : '0%' }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function Skills() {
//   const ref = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el || !('IntersectionObserver' in window)) {
//       setAnimate(true);
//       return;
//     }
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="skills" className="bg-gradient-to-b from-transparent via-sunset-100/50 to-transparent dark:via-sunset-900/20">
//       <div className="section" ref={ref}>
//         <Reveal>
//           <p className="section-eyebrow">Skills</p>
//           <h2 className="section-title">
//             My <span className="gradient-text">tech stack</span>
//           </h2>
//           <p className="mt-3 max-w-2xl text-sunset-950/70 dark:text-sunset-100/70">
//             A MERN-focused toolkit backed by solid SQL experience.
//           </p>
//         </Reveal>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {skillGroups.map((group, i) => (
//             <Reveal key={group.title} delay={i * 120}>
//               <div className="card h-full">
//                 <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
//                   <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sunset-400 to-sunset-700 text-white">
//                     {group.icon}
//                   </span>
//                   {group.title}
//                 </h3>
//                 <div className="space-y-4">
//                   {group.skills.map((s) => (
//                     <SkillBar key={s.name} {...s} animate={animate} />
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={200} className="mt-10">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-sunset-950/60 dark:text-sunset-100/60">
//             Also working with
//           </p>
//           <ul className="flex flex-wrap gap-2.5">
//             {tools.map((t) => (
//               <li
//                 key={t}
//                 className="rounded-full border border-sunset-500/30 bg-sunset-500/10 px-4 py-1.5 text-sm font-medium text-sunset-800 dark:text-sunset-200"
//               >
//                 {t}
//               </li>
//             ))}
//           </ul>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Cloud,
  BriefcaseBusiness,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

import { skillGroups } from '../data';
import Reveal from './Reveal';

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  'AI & LLMs': BrainCircuit,
  Tools: Wrench,
  'Cloud Platforms': Cloud,
  'Professional Skills': BriefcaseBusiness,
  Other: Layers3,
};

function SkillCard({ group, index }) {
  const Icon = iconMap[group.title] || Code2;

  return (
    <Reveal delay={index * 100}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-sunset-500/15 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sunset-500/40 hover:shadow-xl hover:shadow-sunset-500/10 dark:bg-white/[0.03]">

        {/* Decorative background */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sunset-500/5 blur-2xl transition-all duration-500 group-hover:bg-sunset-500/15" />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sunset-400 to-sunset-700 text-white shadow-lg shadow-sunset-600/20">
              <Icon size={23} strokeWidth={1.8} />
            </div>

            <ArrowUpRight
              size={19}
              className="text-sunset-950/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sunset-600 dark:text-white/30"
            />
          </div>

          <h3 className="mb-4 text-lg font-bold text-sunset-950 dark:text-white">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-sunset-500/15 bg-sunset-500/[0.06] px-3 py-2 text-sm font-medium text-sunset-900 transition-colors duration-200 hover:border-sunset-500/40 hover:bg-sunset-500/15 dark:text-sunset-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-sunset-100/50 to-transparent dark:via-sunset-900/20"
    >
      <div className="section">

        <Reveal>
          <p className="section-eyebrow">What I work with</p>

          <h2 className="section-title">
            My <span className="gradient-text">Technical Skills</span>
          </h2>

          <p className="mt-3 max-w-3xl text-sunset-950/70 dark:text-sunset-100/70">
            A versatile technology stack covering frontend development,
            backend engineering, databases, AI integration, and cloud
            deployment — backed by practical problem-solving skills.
          </p>
        </Reveal>

        {/* Skill Categories */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <Reveal delay={200} className="mt-12">
          <div className="rounded-2xl border border-sunset-500/20 bg-white/60 p-6 dark:bg-white/[0.03] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-sunset-500/10 text-sunset-600 dark:text-sunset-300">
                <Layers3 size={21} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-sunset-950 dark:text-white">
                  Additional Expertise
                </h3>
                <p className="text-sm text-sunset-950/60 dark:text-sunset-100/60">
                  Beyond the core technology stack
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                'Responsive Design',
                'Website Optimization',
                'Custom Web Development',
                'API Integration',
                'Database Management',
                'E-Commerce Solutions',
                'Problem-solving',
                'Stakeholder Communication',
                'Technical Documentation',
                // 'Training & Collaboration',
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-sunset-500/20 bg-sunset-500/5 px-4 py-2 text-sm font-medium text-sunset-900 transition-all hover:border-sunset-500/50 hover:bg-sunset-500/10 dark:text-sunset-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

