import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          About <span style={{ color: '#3b82f6' }}>Me</span>
        </h2>
        <div style={{ width: '50px', height: '3px', background: '#3b82f6', marginBottom: '2rem', borderRadius: '2px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#d1d5db', lineHeight: 1.8, marginBottom: '1rem' }}>
              I'm a motivated Software Developer with strong backend and full-stack expertise in
              <span style={{ color: '#3b82f6' }}> Java, Spring Boot</span>, and the
              <span style={{ color: '#3b82f6' }}> MERN stack</span>.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: 1.8, marginBottom: '1rem' }}>
              Skilled in designing scalable REST APIs, implementing JWT-based authentication,
              and building clean layered architectures.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>
              Solid foundation in DSA, DBMS, and system-level concepts. Active on LeetCode with
              consistent problem-solving practice.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: '🎓 Education', value: 'PGDAC — C-DAC Pune + B.Tech CSE (AKTU)' },
              { label: '📍 Location', value: 'Mumbai, India (Open to Relocation)' },
              { label: '💼 Available', value: 'Full-Time Roles — SDE / Backend Dev' },
              { label: '⚡ LeetCode', value: 'Active problem solver' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#111827', border: '1px solid #1f2937',
                borderRadius: '10px', padding: '0.9rem 1.2rem'
              }}>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '2px' }}>{item.label}</p>
                <p style={{ color: '#fff', fontSize: '0.95rem' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}