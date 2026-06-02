import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Languages',
    icon: '💻',
    color: '#3b82f6',
    items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'JPA', 'Hibernate', 'REST APIs', 'JWT', 'Google OAuth2']
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#06b6d4',
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3']
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#f59e0b',
    items: ['MySQL', 'MongoDB', 'Hibernate ORM', 'JPA']
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: '#10b981',
    items: ['Docker', 'Kubernetes', 'Render', 'Vercel', 'Railway', 'AWS (Basics)', 'CI/CD']
  },
  {
    category: 'Full Stack',
    icon: '🔗',
    color: '#f43f5e',
    items: ['Node.js', 'Express.js', 'MongoDB', 'React', 'REST APIs', 'JWT Auth']
  },
  {
    category: 'AI & Integrations',
    icon: '🤖',
    color: '#a855f7',
    items: ['Google Gemini AI', 'Google OAuth2', 'EmailJS', 'Postman']
  },
  {
    category: 'Core CS & Tools',
    icon: '🛠️',
    color: '#64748b',
    items: ['DSA', 'DBMS', 'OS', 'CN', 'Git', 'Maven', 'VS Code', 'IntelliJ']
  },
]

const topSkills = [
  { name: 'Java & Spring Boot', level: 90, color: '#3b82f6' },
  { name: 'REST API Design', level: 88, color: '#8b5cf6' },
  { name: 'React & MERN', level: 82, color: '#06b6d4' },
  { name: 'MySQL & MongoDB', level: 80, color: '#f59e0b' },
  { name: 'Docker & Deployment', level: 70, color: '#10b981' },
  { name: 'DSA & Problem Solving', level: 75, color: '#f43f5e' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: '#050505', position: 'relative', overflow: 'hidden' }}>

      {/* bg blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>

        {/* heading */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>— What I Work With</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Technical <span style={{ color: '#3b82f6' }}>Skills</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }} />
        </motion.div>

        {/* proficiency bars */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{
            background: '#0f172a', border: '1px solid #1e293b',
            borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem'
          }}>
          <h3 style={{ color: '#f1f5f9', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Core Proficiency
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {topSkills.map((skill, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ color: skill.color, fontSize: '0.82rem', fontWeight: 700 }}>{skill.level}%</span>
                </div>
                <div style={{ background: '#1e293b', borderRadius: '10px', height: '7px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                    style={{
                      height: '100%', borderRadius: '10px',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                    }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* skill cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {skills.map((group, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: `0 12px 30px ${group.color}18` }}
              style={{
                background: '#0f172a',
                border: `1px solid ${group.color}22`,
                borderTop: `2px solid ${group.color}`,
                borderRadius: '14px', padding: '1.35rem',
                transition: 'box-shadow 0.3s', cursor: 'default'
              }}>

              {/* card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  style={{ fontSize: '1.3rem' }}>{group.icon}</motion.span>
                <h3 style={{
                  color: group.color, fontSize: '0.82rem',
                  fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase'
                }}>{group.category}</h3>
              </div>

              {/* badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.items.map((skill, j) => (
                  <motion.span key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    style={{
                      background: `${group.color}12`,
                      color: group.color,
                      padding: '0.25rem 0.7rem',
                      borderRadius: '20px', fontSize: '0.78rem',
                      border: `1px solid ${group.color}30`,
                      fontWeight: 500, cursor: 'default'
                    }}>{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom tools strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Deployed & Tested On</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Vercel', 'Render', 'Railway', 'Docker', 'Postman', 'GitHub'].map((tool, i) => (
              <motion.span key={i} whileHover={{ scale: 1.1, y: -3 }}
                style={{
                  background: '#0f172a', border: '1px solid #1e293b',
                  color: '#475569', padding: '0.4rem 1rem',
                  borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500
                }}>{tool}</motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}