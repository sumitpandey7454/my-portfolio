import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'JobSea – Job Portal',
    desc: 'Full-stack job portal with 15+ REST APIs supporting 4 job categories. Features role-based access for job seekers & employers, Google OAuth login, layered architecture with MySQL/JPA, deployed on Render + Vercel.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security', 'Google OAuth', 'React'],
    github: 'https://github.com/sumitpandey7454/JOBSEA/tree/main',
    live: 'https://jobsea-seven.vercel.app/',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #1e3a5f, #1e40af)'
  },
  {
    title: 'ATS Resume Builder',
    desc: 'AI-powered resume platform with free ATS score checker, 25+ templates across 50+ job roles. Integrated Google Gemini AI for keyword generation, Interview Prep module, LinkedIn & GitHub optimizer.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Gemini AI', 'JWT', 'Google OAuth2', 'TailwindCSS'],
    github: 'https://github.com/sumitpandey7454/atsResume',
    live: null,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #2e1065, #4c1d95)'
  },
  {
    title: 'SmartShop – E-Commerce',
    desc: 'Full-stack e-commerce platform on MERN stack with 15+ REST APIs. JWT auth with role-based access for buyers/sellers, product management, shopping cart, order processing, and responsive React UI.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/sumitpandey7454/e-commerce-website',
    live: null,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #022c22, #065f46)'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>

      {/* background blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>

        {/* heading */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — What I've Built
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            My <span style={{ color: '#3b82f6' }}>Projects</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }} />
        </motion.div>

        {/* cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {projects.map((p, i) => (
            <motion.div key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                background: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '18px',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: `0 0 0 1px ${p.color}22`
              }}>

              {/* card top banner */}
              <div style={{
                background: p.gradient,
                padding: '1.5rem 1.75rem',
                borderBottom: `1px solid ${p.color}33`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '100px', height: '100px',
                  background: `radial-gradient(circle, ${p.color}44, transparent)`,
                  borderRadius: '50%'
                }} />
                <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, position: 'relative' }}>{p.title}</h3>
              </div>

              {/* card body */}
              <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.8 }}>{p.desc}</p>

                {/* tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.map((t, j) => (
                    <motion.span key={j}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        background: `${p.color}15`,
                        color: p.color,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        border: `1px solid ${p.color}33`,
                        fontWeight: 500,
                        cursor: 'default'
                      }}>{t}</motion.span>
                  ))}
                </div>

                {/* buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <motion.a href={p.github} target="_blank"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      background: '#1e293b', color: '#cbd5e1',
                      padding: '0.5rem 1rem', borderRadius: '8px',
                      textDecoration: 'none', fontSize: '0.85rem',
                      border: '1px solid #334155', fontWeight: 500
                    }}>
                    🐙 GitHub
                  </motion.a>

                  {p.live ? (
                    <motion.a href={p.live} target="_blank"
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        background: p.color, color: '#fff',
                        padding: '0.5rem 1rem', borderRadius: '8px',
                        textDecoration: 'none', fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                      <ExternalLink size={14} /> Live Demo
                    </motion.a>
                  ) : (
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      background: '#1e293b', color: '#475569',
                      padding: '0.5rem 1rem', borderRadius: '8px',
                      fontSize: '0.85rem', border: '1px solid #1e293b'
                    }}>
                      🔒 Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}