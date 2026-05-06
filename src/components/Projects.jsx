import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
const projects = [
  {
    title: 'Job Application Management System',
    desc: 'A backend-heavy system built with Spring Boot. Features layered architecture (Controller–Service–Repository), JWT authentication, Spring Security, MySQL via Hibernate/JPA, and robust exception handling.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
    github: 'https://github.com/sumitpandey7454',
    color: '#1e40af'
  },
  {
    title: 'SmartShop — MERN E-Commerce',
    desc: 'Full-stack e-commerce platform built on MERN architecture. Includes JWT-based auth with role-based access for buyers/sellers, product management, shopping cart, order processing, and responsive UI.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/sumitpandey7454',
    color: '#065f46'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            My <span style={{ color: '#3b82f6' }}>Projects</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#3b82f6', marginBottom: '2.5rem', borderRadius: '2px' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              style={{
                background: '#111827', border: '1px solid #1f2937',
                borderRadius: '14px', padding: '1.75rem', display: 'flex',
                flexDirection: 'column', gap: '1rem',
                borderTop: `3px solid ${p.color}`
              }}>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>{p.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    background: '#1f2937', color: '#60a5fa', padding: '0.25rem 0.7rem',
                    borderRadius: '20px', fontSize: '0.78rem', border: '1px solid #2d3748'
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={p.github} target="_blank" style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem',
                  transition: 'color 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                  <ExternalLink size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}