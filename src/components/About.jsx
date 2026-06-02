import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing',
    short: 'PGDAC',
    institute: 'IACSD – C-DAC, Pune',
    university: 'Centre for Development of Advanced Computing (C-DAC) — Govt. of India',
    period: 'Aug 2025 – Feb 2026',
    score: '74%',
    link: 'https://www.cdac.in',
    color: '#3b82f6'
  },
  {
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    short: 'B.Tech CSE',
    institute: 'United College of Engineering & Management, Prayagraj',
    university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: '2021 – 2025',
    score: '76.2%',
    link: 'https://www.united.ac.in',
    color: '#10b981'
  }
]

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', maxWidth: '950px', margin: '0 auto' }}>

      {/* About Me heading */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>— Who I Am</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          About <span style={{ color: '#3b82f6' }}>Me</span>
        </h2>
        <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', marginBottom: '2.5rem', borderRadius: '2px' }} />
      </motion.div>

      {/* About content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: '#d1d5db', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
            I'm a motivated Software Developer with strong backend and full-stack expertise in
            <span style={{ color: '#3b82f6', fontWeight: 600 }}> Java, Spring Boot</span>, and the
            <span style={{ color: '#3b82f6', fontWeight: 600 }}> MERN stack</span>.
          </p>
          <p style={{ color: '#d1d5db', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
            Skilled in designing scalable REST APIs, implementing JWT-based authentication,
            and building clean layered architectures.
          </p>
          <p style={{ color: '#d1d5db', lineHeight: 1.9, fontSize: '0.97rem' }}>
            Solid foundation in DSA, DBMS, and system-level concepts. Active on LeetCode with
            consistent problem-solving practice.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {[
            { label: '🎓 Education', value: 'PGDAC — C-DAC Pune + B.Tech CSE (AKTU)' },
            { label: '📍 Location', value: 'Mumbai, India (Open to Relocation)' },
            { label: '💼 Available', value: 'Full-Time Roles — SDE / Backend Dev' },
            { label: '⚡ LeetCode', value: 'Active problem solver' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
              style={{
                background: '#0f172a', border: '1px solid #1e293b',
                borderRadius: '10px', padding: '0.9rem 1.2rem', transition: 'border-color 0.2s'
              }}>
              <p style={{ color: '#64748b', fontSize: '0.78rem', marginBottom: '3px' }}>{item.label}</p>
              <p style={{ color: '#f1f5f9', fontSize: '0.95rem', fontWeight: 500 }}>{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education heading */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '2rem' }}>
        <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>— Academic Background</p>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
          My <span style={{ color: '#3b82f6' }}>Education</span>
        </h2>
        <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #10b981)', marginTop: '0.5rem', borderRadius: '2px' }} />
      </motion.div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>

        {/* vertical line */}
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: '7px', top: '8px',
            width: '2px', height: '85%',
            background: 'linear-gradient(180deg, #3b82f6, #10b981)',
            transformOrigin: 'top', borderRadius: '2px'
          }} />

        {education.map((edu, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            style={{ marginBottom: '2rem', position: 'relative' }}>

            {/* dot */}
            <motion.div
              initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.3 + 0.2, type: 'spring', stiffness: 300 }}
              style={{
                position: 'absolute', left: '-1.75rem', top: '12px',
                width: '16px', height: '16px', borderRadius: '50%',
                background: edu.color,
                boxShadow: `0 0 12px ${edu.color}88`,
                border: '3px solid #0a0a0a'
              }} />

            {/* card */}
            <motion.div whileHover={{ y: -4, boxShadow: `0 8px 30px ${edu.color}22` }}
              style={{
                background: '#0f172a',
                border: `1px solid ${edu.color}33`,
                borderLeft: `3px solid ${edu.color}`,
                borderRadius: '14px',
                padding: '1.5rem',
                transition: 'box-shadow 0.3s'
              }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <span style={{
                    background: `${edu.color}20`, color: edu.color,
                    fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem',
                    borderRadius: '20px', border: `1px solid ${edu.color}44`,
                    letterSpacing: '0.05em'
                  }}>{edu.short}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    background: `${edu.color}20`, color: edu.color,
                    fontSize: '0.85rem', fontWeight: 700, padding: '0.2rem 0.7rem',
                    borderRadius: '8px'
                  }}>{edu.score}</span>
                  <span style={{
                    background: '#1e293b', color: '#64748b',
                    fontSize: '0.78rem', padding: '0.2rem 0.7rem', borderRadius: '8px'
                  }}>{edu.period}</span>
                </div>
              </div>

              <h3 style={{ color: '#f1f5f9', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                {edu.degree}
              </h3>

              <a href={edu.link} target="_blank" style={{
                color: edu.color, fontSize: '0.88rem', fontWeight: 600,
                textDecoration: 'none', display: 'inline-block', marginBottom: '0.25rem'
              }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                🔗 {edu.institute}
              </a>

              <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '0.25rem' }}>{edu.university}</p>

              <div style={{ marginTop: '0.75rem' }}>
                <span style={{
                  background: '#166534', color: '#4ade80',
                  fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem',
                  borderRadius: '20px', letterSpacing: '0.05em'
                }}>✓ COMPLETED</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}