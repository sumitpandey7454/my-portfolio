import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  { category: 'Backend', items: ['Spring Boot', 'Spring MVC', 'JPA', 'Hibernate'] },
  { category: 'API & Security', items: ['REST APIs', 'JWT', 'Spring Security'] },
  { category: 'Frontend', items: ['React', 'Node.js', 'Express', 'MongoDB'] },
  { category: 'Core CS', items: ['DSA', 'DBMS', 'OS', 'CN'] },
  { category: 'Tools', items: ['Git', 'Maven', 'Postman', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Technical <span style={{ color: '#3b82f6' }}>Skills</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#3b82f6', marginBottom: '2.5rem', borderRadius: '2px' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {skills.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((skill, j) => (
                  <span key={j} style={{
                    background: '#1f2937', color: '#d1d5db', padding: '0.3rem 0.8rem',
                    borderRadius: '20px', fontSize: '0.85rem', border: '1px solid #374151'
                  }}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}