import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container section-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-8">About Me</h2>
        <div className="space-y-4 muted leading-relaxed">
          <p>
            Computer Engineering student with a strong interest in backend engineering, distributed systems, 
            real-time applications, and developer tools.
          </p>
          <p>
            I focus on building scalable backend systems and tools that solve real problems. 
            Currently studying at Thadomal Shahani Engineering College with a CGPA of 9.44.
          </p>
          <p>
            Experienced with Node.js, Express, PostgreSQL, MongoDB, Docker, Redis, WebSockets, React, and FastAPI. 
            Passionate about writing clean, maintainable code and creating intuitive developer experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
