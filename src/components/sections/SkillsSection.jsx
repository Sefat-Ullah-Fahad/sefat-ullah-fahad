"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiBootstrap,
  SiDaisyui,
  SiGraphql,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiCloudinary,
  SiGreensock,
  SiBetterauth,
  SiNodemon,
  SiFramer,
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import {
  HiOutlineSquares2X2,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineCursorArrowRays,
  HiOutlineCodeBracket,
  HiOutlineBolt,
} from "react-icons/hi2";

const skillsSectionData = [
  {
    name: "HTML5",
    category: "frontend",
    icon: "Code",
    level: "Advanced",
    description:
      "Semantic markup, accessibility (a11y), SEO-friendly structure",
    popular: true,
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "Palette",
    level: "Advanced",
    description: "Modern flexbox, grid layouts, animations, responsive design",
    popular: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: "Sparkles",
    level: "Advanced",
    description:
      "Async/await, closures, functional programming, DOM performance",
    popular: true,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "ShieldCheck",
    level: "Advanced",
    description:
      "Strict typing, generic interfaces, scalable enterprise architecture",
    popular: true,
  },
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    level: "Advanced",
    description: "Custom hooks, concurrent mode, performance memoization",
    popular: true,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "Layers",
    level: "Advanced",
    description:
      "App router, SSR/SSG, Server Actions, route handlers, metadata",
    popular: true,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Wind",
    level: "Advanced",
    description:
      "Utility-first styling, design system tokens, responsive setups",
    popular: true,
  },
  {
    name: "GSAP",
    category: "frontend",
    icon: "Zap",
    level: "Proficient",
    description: "High-performance timeline animations, SVG morphing",
    popular: true,
  },
  {
    name: "ScrollTrigger",
    category: "frontend",
    icon: "MousePointerClick",
    level: "Proficient",
    description: "Scroll-linked choreography, pinning, scrubbed motions",
    popular: true,
  },
  {
    name: "Framer Motion",
    category: "frontend",
    icon: "Workflow",
    level: "Advanced",
    description:
      "Declarative layout animations, gesture controls, exit transitions",
    popular: true,
  },
  {
    name: "Redux / Redux Toolkit",
    category: "frontend",
    icon: "Database",
    level: "Advanced",
    description: "Global state slices, RTK Query, predictable state pipelines",
    popular: true,
  },
  {
    name: "Vue.js",
    category: "frontend",
    icon: "Box",
    level: "Intermediate",
    description: "Reactivity system, Single File Components (SFC), Pinia",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "Grid",
    level: "Advanced",
    description: "Rapid grid prototyping, responsive component themes",
  },
  {
    name: "DaisyUI",
    category: "frontend",
    icon: "Component",
    level: "Advanced",
    description: "Tailwind CSS component system with theme switching",
  },
  {
    name: "GraphQL",
    category: "frontend",
    icon: "Cpu",
    level: "Proficient",
    description: "Schema definition, queries, mutations, Apollo Client",
  },
  {
    name: "NextAuth.js / Auth.js",
    category: "frontend",
    icon: "KeyRound",
    level: "Advanced",
    description: "OAuth providers, session tokens, secure callbacks",
    popular: true,
  },
  {
    name: "Better Auth",
    category: "frontend",
    icon: "Lock",
    level: "Proficient",
    description: "Modern authentication framework for full-stack apps",
  },
  {
    name: "Supabase Auth",
    category: "frontend",
    icon: "Shield",
    level: "Advanced",
    description: "Row Level Security, magic links, social auth, JWTs",
    popular: true,
  },
  {
    name: "Firebase",
    category: "frontend",
    icon: "Flame",
    level: "Proficient",
    description: "Auth, Firestore, Cloud Functions, real-time sync",
  },

  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    level: "Advanced",
    description: "Event loop architecture, streaming APIs, microservices",
    popular: true,
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "Share2",
    level: "Advanced",
    description: "RESTful architecture, custom middleware, error handling",
    popular: true,
  },
  {
    name: "JWT Authentication",
    category: "backend",
    icon: "Key",
    level: "Advanced",
    description: "Stateless authorization, token refresh cycles, HMAC/RSA",
  },
  {
    name: "OAuth 2.0",
    category: "backend",
    icon: "LockKeyhole",
    level: "Advanced",
    description: "Third-party authorization flows, PKCE, secure tokens",
  },
  {
    name: "RESTful APIs",
    category: "backend",
    icon: "Globe",
    level: "Advanced",
    description: "Clean endpoint schemas, status codes, OpenAPI docs",
    popular: true,
  },
  {
    name: "WebSockets",
    category: "backend",
    icon: "Radio",
    level: "Intermediate",
    description: "Bi-directional real-time communication, events",
  },

  {
    name: "Supabase",
    category: "database",
    icon: "DatabaseZap",
    level: "Advanced",
    description: "PostgreSQL, Row Level Security (RLS), Realtime triggers",
    popular: true,
  },
  {
    name: "MongoDB Atlas",
    category: "database",
    icon: "HardDrive",
    level: "Advanced",
    description: "Aggregation pipelines, indexing, schema design, Mongoose",
    popular: true,
  },
  {
    name: "MySQL",
    category: "database",
    icon: "Table",
    level: "Proficient",
    description: "Relational querying, foreign keys, transaction handling",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "Layers",
    level: "Advanced",
    description: "Complex joins, JSONB indexing, ACID compliance",
    popular: true,
  },

  {
    name: "Git",
    category: "tools",
    icon: "GitBranch",
    level: "Advanced",
    description: "Branch management, interactive rebase, team workflows",
    popular: true,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "Github",
    level: "Advanced",
    description: "CI/CD actions, pull requests, issue tracking, projects",
    popular: true,
  },
  {
    name: "Figma",
    category: "tools",
    icon: "Figma",
    level: "Advanced",
    description: "UI/UX design, auto-layout inspection, design systems",
    popular: true,
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "Terminal",
    level: "Advanced",
    description: "Custom dev workflow, debugging, extensions, snippets",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "Send",
    level: "Advanced",
    description:
      "API testing suites, collection automation, environment variables",
  },
  {
    name: "Vercel",
    category: "tools",
    icon: "Triangle",
    level: "Advanced",
    description: "Edge deployment, serverless functions, analytics",
    popular: true,
  },
  {
    name: "Netlify",
    category: "tools",
    icon: "Cloud",
    level: "Proficient",
    description: "Static site hosting, form handling, build hooks",
  },
  {
    name: "Thunder Client",
    category: "tools",
    icon: "Zap",
    level: "Proficient",
    description: "Lightweight in-editor API testing client",
  },
  {
    name: "Docker",
    category: "tools",
    icon: "Container",
    level: "Intermediate",
    description: "Containerization, Dockerfiles, isolated dev environments",
  },
  {
    name: "Nodemon",
    category: "tools",
    icon: "RefreshCw",
    level: "Advanced",
    description: "Fast auto-reloading backend developer environment",
  },
  {
    name: "Cloudinary",
    category: "tools",
    icon: "Image",
    level: "Advanced",
    description: "Dynamic image optimization, CDN uploads, auto-formatting",
  },
  {
    name: "Canva",
    category: "tools",
    icon: "Layout",
    level: "Proficient",
    description: "Asset creation, brand materials, presentation graphics",
  },
];

const skillIconMap = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  "JavaScript (ES6+)": SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  GSAP: SiGreensock,
  ScrollTrigger: HiOutlineCursorArrowRays,
  "Framer Motion": SiFramer,
  "Redux / Redux Toolkit": SiRedux,
  "Vue.js": SiVuedotjs,
  Bootstrap: SiBootstrap,
  DaisyUI: SiDaisyui,
  GraphQL: SiGraphql,
  "NextAuth.js / Auth.js": HiOutlineShieldCheck,
  "Better Auth": SiBetterauth,
  "Supabase Auth": SiSupabase,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "JWT Authentication": SiJsonwebtokens,
  "OAuth 2.0": HiOutlineShieldCheck,
  "RESTful APIs": TbApi,
  WebSockets: TbBrandSocketIo,
  Supabase: SiSupabase,
  "MongoDB Atlas": SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  "VS Code": HiOutlineCodeBracket,
  Postman: SiPostman,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  "Thunder Client": HiOutlineBolt,
  Docker: SiDocker,
  Nodemon: SiNodemon,
  Cloudinary: SiCloudinary,
  Canva: HiOutlineSquares2X2,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 bg-white border-t border-brand-sage/35 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-blue/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-brand-olive font-semibold uppercase tracking-wider">
                Technical Arsenal
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-blue-dark tracking-tight">
              Skills &{" "}
              <span className="text-brand-gradient-glow">Capabilities</span>
            </h2>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-3xl bg-brand-surface border border-brand-sage/35 shadow-xl shadow-brand-blue/10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3">
            {skillsSectionData.map((skill) => {
              const Icon = skillIconMap[skill.name] || HiOutlineCube;

              return (
                <div
                  key={skill.name}
                  role="img"
                  aria-label={skill.name}
                  title={skill.name}
                  className="group grid aspect-square min-h-20 grid-rows-[1fr_1.25rem] place-items-center rounded-xl border border-brand-blue/15 bg-white p-3 text-brand-blue shadow-sm transition-colors hover:border-brand-sage hover:bg-brand-surface-sage"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-9 w-9 transition-transform group-hover:scale-110 group-hover:text-brand-sage-dark sm:h-10 sm:w-10 md:h-11 md:w-11"
                  />
                  <span className="max-w-full translate-y-1 truncate text-center text-[11px] font-medium text-brand-blue opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
