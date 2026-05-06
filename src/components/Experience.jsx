import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Java Full Stack Intern',
    company: 'Netcamp Solution Private Limited',
    period: 'Sep 2022 – Oct 2022',
    points: [
      'Developed backend services using Java and Spring framework for a real-world application',
      'Built RESTful APIs, handled database integration, and wrote clean maintainable code',
      'Gained practical exposure to SDLC, team workflows, and best practices'
    ]
  },
  {
    role: 'Data Analyst Intern',
    company: 'Unified Mentor Private Limited',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Performed data cleaning and preprocessing on structured datasets for analysis accuracy',
      'Extracted meaningful business insights to aid in strategic decision-making',
      'Built visualizations and dashboards to communicate data patterns and trends'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <span style={{ color: '#3b82f6' }}>Experience</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#3b82f6', marginBottom: '2.5rem', borderRadius: '2px' }} />
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              style={{
                background: '#111827', border: '1px solid #1f2937',
                borderLeft: '3px solid #3b82f6', borderRadius: '12px', padding: '1.5rem'
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600 }}>{exp.role}</h3>
                  <p style={{ color: '#3b82f6', fontSize: '0.9rem' }}>{exp.company}</p>
                </div>
                <span style={{
                  background: '#1f2937', color: '#9ca3af', padding: '0.25rem 0.8rem',
                  borderRadius: '20px', fontSize: '0.8rem', height: 'fit-content'
                }}>{exp.period}</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}