import { motion } from 'framer-motion';
import hiremitra from '../assets/hiremitra.png';
import crypt from '../assets/crypt.png';

const projects = [
  {
    title: 'Database Backup Utility',
    description: 'Cross-database CLI tool for PostgreSQL and MongoDB supporting backup, restore, connection testing, and configuration management.',
    features: [
      'Backup and restore workflows with validation checks',
      'Compressed backups and automated recovery support',
      'Safe restore mechanism with temporary databases and rollback support',
      'Structured logging and retry mechanisms',
    ],
    tech: ['Node.js', 'PostgreSQL', 'MongoDB', 'Winston', 'Inquirer'],
    github: 'https://github.com/GR4V1TY123/Penguin_Backup_Tool',
  },
  {
    title: 'CryptTalk',
    description: 'Anonymous real-time developer discussion platform supporting topic-based matchmaking, ephemeral chat rooms, and collaborative coding sessions.',
    features: [
      'Topic-based matchmaking for developers',
      'Controlled collaborative editor with request/grant workflows',
      'Debounced synchronization for efficient socket usage',
      'Real-time collaboration on code',
    ],
    img: crypt,
    tech: ['Node.js', 'Express', 'Socket.IO', 'React', 'TypeScript'],
    github: 'https://github.com/GR4V1TY123/Crypt_Talk',
    live: 'https://crypt-talk-three.vercel.app/',
  },
  {
    title: 'HireMitra',
    description: 'Full-stack job portal for recruiters and candidates with role-based workflows, JWT authentication, and comprehensive profile management.',
    features: [
      'JWT authentication and role-based access control',
      'Recruiter workflow for job posting and candidate tracking',
      'Candidate workflow for job search and applications',
      'Profile and application management',
    ],
    img: hiremitra,
    tech: ['MERN', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/GR4V1TY123/HireMitra',
    live: 'https://hiremitra.onrender.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container section-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-12">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="project-card"
            >
              <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  </div>

                  <p className="muted">{project.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="grid gap-2 text-sm muted">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-neutral-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="project-shot">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium text-white"
                        style={{ background: 'var(--accent)' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
