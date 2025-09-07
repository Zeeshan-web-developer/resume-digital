"use client"
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Globe,
  Star,
  FileDown,
} from "lucide-react";

// Full, unique "Sunny Glass" resume — now with complete Experience, Projects, Education, Certificates & Awards

const data = {
  name: "Zeeshan Ahmad",
  title: "Full‑Stack Developer",
  location: "Hyderabad, India",
  email: "zeeshan1361@gmail.com",
  phone: "+91-7006304092",
  github: "https://github.com/Zeeshan-web-developer",
  linkedin: "https://linkedin.com/in/zeeshan-ahmad-dar",
  summary:
    "Creative Full‑Stack Developer with 5+ years building scalable web apps and tooling. I blend product focus with strong technical skills — Next.js, React, Node, Spring Boot, and AWS — to ship high-performance, maintainable systems.",
  skills: {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Ant Design", "Tiptap"],
    Backend: ["Node.js", "Express.js", "Spring Boot", "Microservices", "Erlang (XMPP)"],
    Databases: ["MySQL", "MongoDB"],
    Cloud_Tools: ["AWS", "S3", "CloudFront", "Sentry", "LogRocket"],
    Languages: ["JavaScript", "TypeScript", "Java"],
    Soft_Skills: ["Leadership", "Mentoring", "Cross‑team Collaboration"],
  },
  experience: [
    {
      company: "Head Digital Works",
      role: "Full‑Stack Developer",
      location: "Hyderabad, India",
      period: "Nov 2024 – Present",
      bullets: [
        "Migrated A23’s WordPress blog to a Spring Boot + MySQL stack to improve scalability and security.",
        "Built an SEO‑optimized frontend in Next.js + Tailwind and used SSG/ISR to improve performance and organic traffic.",
        "Designed & deployed microservices on AWS for better isolation, observability, and autoscaling.",
        "Authored custom JPQL queries and optimized database access patterns to reduce response times.",
        "Shipped an in‑house drag‑and‑drop website builder and rich text editor, reducing landing‑page creation time by ~50%.",
        "Replaced a costly third‑party FAQ system with an in‑house solution to cut recurring costs and increase flexibility.",
      ],
    },
    {
      company: "Resthero.io",
      role: "Full‑Stack Developer",
      location: "UAE (Remote)",
      period: "Feb 2022 – Sep 2024",
      bullets: [
        "Integrated Google Pay, Apple Pay, TELR and custom checkout flows, increasing successful transactions by ~15%.",
        "Led a small team (2 developers); implemented payment flows and improved reliability.",
        "Optimized Google Maps usage and caching strategy to significantly reduce third‑party API costs.",
        "Built and optimized Node.js REST APIs; improved Excel/CSV processing speed by ~30%.",
        "Implemented Sentry & LogRocket for proactive error detection and faster incident resolution.",
      ],
    },
    {
      company: "BellaCode",
      role: "Full‑Stack Developer",
      location: "Kochi, India",
      period: "Aug 2020 – Oct 2021",
      bullets: [
        "Built real‑time backend services with Erlang & XMPP for highly concurrent communication systems.",
        "Developed cross‑platform desktop applications using Electron + React.",
        "Implemented VoIP and media features to improve call robustness and latency.",
        "Improved client‑side state management using Redux middleware patterns for predictable flows.",
      ],
    },
  ],
  projects: [
    {
      name: "reactjs‑tiptap‑editor",
      desc: "Enhanced TipTap editor with video alignment and table border features (open source).",
      link: "https://github.com/hunghg255/reactjs-tiptap-editor",
    },
    {
      name: "Parking Lot Management System",
      desc: "React app to manage parking slots, durations and quick reporting.",
      link: "https://github.com/Zeeshan-web-developer/Parking-Lot-Management",
    },
    {
      name: "puck‑edit (Website Builder)",
      desc: "Drag‑and‑drop website builder with custom React extensions for marketers.",
      link: "https://github.com/Zeeshan-web-developer/puck-edit",
    },
    {
      name: "SaaS E‑commerce Platform",
      desc: "Storefront + payments (Stripe/GooglePay/ApplePay) and admin with real‑time reporting.",
      link: "https://admin.resthero.io/",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      degree: "Master of Computer Applications (MCA)",
      meta: "CGPA: 8.5/10",
      period: "Aug 2019 – Jun 2021",
    },
  ],
  certificates: [
    "Front‑End Web Development with React (Coursera)",
    "Front‑End Web UI Frameworks and Tools: Bootstrap 4 (Coursera)",
  ],
  awards: [
    "Recognized at RestHero.io for leading payment integrations and increasing transactions by ~15%.",
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export default function ResumeSunnyFull() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-slate-800">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-amber-300/60 to-orange-300/40 blur-3xl" />

      {/* Top bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 border-b border-amber-200/60"
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 shadow-lg animate-pulse" />
            <div className="font-semibold tracking-tight">{data.name} • Resume</div>
          </div>
          <div className="flex items-center gap-2">
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white/80 px-3 py-2 text-sm shadow-sm hover:scale-105 transition-transform">
              <Mail className="h-4 w-4" /> Email
            </a>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white/80 px-3 py-2 text-sm shadow-sm hover:scale-105 transition-transform">
              <FileDown className="h-4 w-4" /> Save PDF
            </button>
          </div>
        </div>
      </motion.header>

      <motion.section variants={container} initial="hidden" animate="show" className="mx-auto max-w-6xl px-4 py-10 print:py-6">
        {/* Header card */}
        <motion.div variants={item} whileHover={{ scale: 1.01 }} className="mb-8 rounded-3xl bg-white/70 p-7 shadow-[0_18px_60px_-30px_rgba(255,165,0,0.4)] ring-1 ring-amber-200/60">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-amber-300/70 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200" />
                <div className="absolute inset-0 bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQEGEWIDkMbkLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726157746965?e=1759968000&v=beta&t=EedxWrjsoTitKSINOzWQ9o4d2fedWzndCpRGpUke2jI')] bg-cover bg-center mix-blend-multiply" />
              </div>
              <div>
                <h1 className="text-3xl font-black md:text-4xl">{data.name}</h1>
                <div className="mt-1 text-lg font-medium text-amber-700">{data.title}</div>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <InfoPill icon={<MapPin className="h-4 w-4" />}>{data.location}</InfoPill>
                  <InfoPill icon={<Mail className="h-4 w-4" />}>{data.email}</InfoPill>
                  <InfoPill icon={<Phone className="h-4 w-4" />}>{data.phone}</InfoPill>
                  <InfoLink href={data.github} icon={<Github className="h-4 w-4" />}>GitHub</InfoLink>
                  <InfoLink href={data.linkedin} icon={<Linkedin className="h-4 w-4" />}>LinkedIn</InfoLink>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="max-w-md text-slate-700">
              <p>{data.summary}</p>
              <div className="mt-4 flex gap-3">
                <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-amber-200/60 bg-white/80 px-3 py-2 text-sm shadow-sm hover:underline">
                  <Github className="h-4 w-4" /> View code
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-amber-200/60 bg-white/80 px-3 py-2 text-sm shadow-sm hover:underline">
                  <Linkedin className="h-4 w-4" /> Connect
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={item} className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {Object.entries(data.skills).map(([group, items]) => (
            <motion.div key={group} variants={item} whileHover={{ translateY: -4 }} className="rounded-2xl border border-amber-200/70 bg-white/70 p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-full bg-amber-300 p-2 shadow-inner" />
                <div className="font-semibold text-slate-800">{group.replaceAll("_", " ")}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((s) => (
                  <span key={s} className="rounded-full border border-amber-200/60 bg-white/60 px-3 py-1 text-sm shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <Section title="Experience" icon={<Briefcase className="h-5 w-5" />}>
          <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-300 before:to-orange-300 md:before:left-2">
            {data.experience.map((exp, i) => (
              <motion.div variants={item} key={i} className="relative pl-12 md:pl-8">
                <div className="absolute left-0 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 ring-4 ring-orange-100" />
                <div className="rounded-2xl border border-amber-200/70 bg-white/70 p-5 shadow-sm">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{exp.role} <span className="text-slate-500">@ {exp.company}</span></h3>
                    <span className="text-sm text-amber-700/90">{exp.period}</span>
                  </div>
                  <div className="text-sm text-slate-600">{exp.location}</div>
                  <ul className="mt-3 list-disc pl-5 text-[15px] leading-7 text-slate-700">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={<Globe className="h-5 w-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            {data.projects.map((p, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }}>
                <div className="rounded-2xl border border-amber-200/70 bg-white/70 p-5 shadow-sm">
                  <div className="font-semibold">{p.name}</div>
                  <p className="mt-2 text-slate-700">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-amber-700 hover:underline">
                    Visit <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education / Certificates / Awards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Section title="Education" icon={<GraduationCap className="h-5 w-5" />}>
              {data.education.map((e, i) => (
                <motion.div key={i} variants={item} className="mb-3">
                  <div className="rounded-2xl border border-amber-200/70 bg-white/70 p-4 shadow-sm">
                    <div className="font-semibold">{e.school}</div>
                    <div className="text-slate-700">{e.degree}</div>
                    <div className="text-sm text-amber-700/90">{e.period}</div>
                    {e.meta && <div className="text-sm text-slate-600">{e.meta}</div>}
                  </div>
                </motion.div>
              ))}
            </Section>
          </div>

          <div>
            <Section title="Certificates" icon={<Award className="h-5 w-5" />}>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-2">
                {data.certificates.map((c, i) => (
                  <motion.li key={i} variants={item} className="rounded-xl border border-amber-200/70 bg-white/70 p-3 text-sm shadow-sm">
                    {c}
                  </motion.li>
                ))}
              </motion.ul>

              <Section title="Awards" icon={<Star className="h-5 w-5" />}>
                <div className="rounded-2xl border border-amber-200/70 bg-white/70 p-4 shadow-sm">
                  <ul className="list-disc pl-5 text-[15px] leading-7 text-slate-700">
                    {data.awards.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </Section>
            </Section>
          </div>
        </div>

        <motion.div variants={item} className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {data.name} — Built with Next.js, Tailwind CSS & Framer Motion.
        </motion.div>
      </motion.section>

      <style jsx global>{`
        @media print {
          @page { margin: 0.5in; }
          main { background: white !important; }
          .print\\:py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        }
      `}</style>
    </main>
  );
}

function Section({ title, icon, children }) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 p-2 shadow">
          {icon}
        </div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function InfoPill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-3 py-1 text-sm shadow-sm">
      {icon}
      <span className="text-sm">{children}</span>
    </span>
  );
}

function InfoLink({ href, icon, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-3 py-1 text-sm shadow-sm hover:underline">
      {icon}
      <span className="text-sm">{children}</span>
    </a>
  );
}
