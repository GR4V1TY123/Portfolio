import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'C', 'C++'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'WebSockets', 'Prisma'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'React Native', 'Tailwind CSS', 'Expo'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container section-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-12">Technical Skills</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-xl"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-5 md:p-6">
                <h3 className="font-semibold text-xl mb-10">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
