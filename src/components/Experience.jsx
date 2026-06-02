import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'Freelance Software Engineer',
    company: 'Fiverr',
    type: 'Freelance',
    period: 'Feb 2026 – Present',
    color: '#1dbf73',
    gradient: 'linear-gradient(135deg, #052e16, #065f46)',
    links: [
      { label: 'Fiverr Profile', href: 'https://www.fiverr.com/sumitpandey7454' },
      { label: 'View Gig', href: 'https://www.fiverr.com/s/wkvqDXq' },
    ],
    points: [
      'Delivering freelance software development services to international clients on Fiverr',
      'Building backend systems using Java, Spring Boot, REST APIs and JWT authentication',
      'Developing full-stack web applications using MERN stack for diverse client requirements',
      'Maintaining 5-star service quality with clean, maintainable and well-documented code',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'React', 'Node.js', 'MongoDB', 'MySQL']
  },
  {
    role: 'Java Full Stack Intern',
    company: 'Netcamp Solution Private Limited',
    type: 'Internship',
    period: 'Sep 2022 – Oct 2022',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
    links: [],
    points: [
      'Developed backend services using Java and Spring framework for a real-world application',
      'Built RESTful APIs, handled database integration, and wrote clean maintainable code',
      'Gained practical exposure to SDLC, team workflows, and best practices',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL']
  },
  {
    role: 'Data Analyst Intern',
    company: 'Unified Mentor Private Limited',
    type: 'Internship',
    period: 'Jul 2024 – Aug 2024',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #0f172a, #2e1065)',
    links: [],
    points: [
      'Performed data cleaning and preprocessing on structured datasets for analysis accuracy',
      'Extracted meaningful business insights to aid in strategic decision-making',
      'Built visualizations and dashboards to communicate data patterns and trends',
    ],
    tech: ['Python', 'Pandas', 'Data Visualization', 'Excel']
  }
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 2rem', background: '#050505', position: 'relative', overflow: 'hidden' }}>

      {/* background blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%', width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%', width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(29,191,115,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* heading */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>— Work History</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            My <span style={{ color: '#3b82f6' }}>Experience</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }} />
        </motion.div>

        {/* timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>

          {/* vertical line */}
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: '7px', top: '8px',
              width: '2px', height: '90%',
              background: 'linear-gradient(180deg, #1dbf73, #3b82f6, #8b5cf6)',
              transformOrigin: 'top', borderRadius: '2px'
            }} />

          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              style={{ marginBottom: '2.5rem', position: 'relative' }}>

              {/* dot */}
              <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                style={{
                  position: 'absolute', left: '-1.75rem', top: '18px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 14px ${exp.color}99`,
                  border: '3px solid #050505'
                }} />

              {/* card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: `0 12px 40px ${exp.color}22` }}
                style={{
                  background: '#0f172a',
                  border: `1px solid ${exp.color}33`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s'
                }}>

                {/* card top banner */}
                <div style={{
                  background: exp.gradient,
                  padding: '1.25rem 1.5rem',
                  borderBottom: `1px solid ${exp.color}22`,
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', top: '-30px', right: '-30px',
                    width: '120px', height: '120px',
                    background: `radial-gradient(circle, ${exp.color}33, transparent)`,
                    borderRadius: '50%'
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', position: 'relative' }}>
                    <div>
                      <h3 style={{ color: '#f1f5f9', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.role}</h3>
                      <p style={{ color: exp.color, fontSize: '0.9rem', fontWeight: 600 }}>{exp.company}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                      <span style={{
                        background: `${exp.color}25`, color: exp.color,
                        fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.75rem',
                        borderRadius: '20px', border: `1px solid ${exp.color}44`
                      }}>{exp.type}</span>
                      <span style={{
                        background: '#1e293b', color: '#64748b',
                        fontSize: '0.75rem', padding: '0.2rem 0.75rem', borderRadius: '20px'
                      }}>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* card body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                  {/* bullet points */}
                  <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.points.map((pt, j) => (
                      <motion.li key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + j * 0.1 }}
                        style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, display: 'flex', gap: '0.6rem' }}>
                        <span style={{ color: exp.color, marginTop: '4px', flexShrink: 0 }}>▹</span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>

                  {/* tech badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tech.map((t, j) => (
                      <motion.span key={j} whileHover={{ scale: 1.1 }}
                        style={{
                          background: `${exp.color}12`, color: exp.color,
                          padding: '0.2rem 0.7rem', borderRadius: '20px',
                          fontSize: '0.75rem', border: `1px solid ${exp.color}30`,
                          fontWeight: 500, cursor: 'default'
                        }}>{t}</motion.span>
                    ))}
                  </div>

                  {/* links */}
                  {exp.links.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
                      {exp.links.map((link, j) => (
                        <motion.a key={j} href={link.href} target="_blank"
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            background: j === 0 ? exp.color : '#1e293b',
                            color: j === 0 ? '#fff' : exp.color,
                            padding: '0.5rem 1rem', borderRadius: '8px',
                            textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
                            border: `1px solid ${exp.color}44`
                          }}>
                          <ExternalLink size={13} /> {link.label}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}