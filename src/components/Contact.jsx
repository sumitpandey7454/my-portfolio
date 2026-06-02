import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'

const socials = [
  { icon: <Mail size={20} />, label: 'sumitpandey7454@gmail.com', href: 'mailto:sumitpandey7454@gmail.com', color: '#ea4335' },
  { icon: <Phone size={20} />, label: '+91 7454824558', href: 'tel:+917454824558', color: '#10b981' },
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-pandey-5519b7276', color: '#0a66c2' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/sumitpandey7454', color: '#ffffff' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>

      <div style={{
        position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#3b82f6', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>— Let's Connect</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Get In <span style={{ color: '#3b82f6' }}>Touch</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#64748b', lineHeight: 1.8 }}>
            I'm open to full-time Software Developer / Backend roles. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {socials.map((s, i) => (
            <motion.a key={i} href={s.href} target="_blank"
              whileHover={{ x: 6, borderColor: s.color }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: '#0f172a', border: '1px solid #1e293b',
                borderRadius: '12px', padding: '1rem 1.5rem',
                textDecoration: 'none', color: '#cbd5e1',
                transition: 'border-color 0.2s'
              }}>
              <span style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${s.color}18`, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: s.color, flexShrink: 0, fontSize: '1.2rem'
              }}>{s.icon}</span>
              <span style={{ fontSize: '0.95rem' }}>{s.label}</span>
            </motion.a>
          ))}

          {/* Open to work badge */}
          <motion.div whileHover={{ scale: 1.02 }}
            style={{
              background: '#052e16', border: '1px solid #166534',
              borderRadius: '12px', padding: '1rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem'
            }}>
            <div style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: '#4ade80', boxShadow: '0 0 8px #4ade80',
              flexShrink: 0
            }} />
            <div>
              <p style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: 600 }}>Open to Work</p>
              <p style={{ color: '#166534', fontSize: '0.8rem' }}>Available for full-time SDE / Backend roles</p>
            </div>
          </motion.div>

        </motion.div>

        <p style={{ color: '#1e293b', fontSize: '0.85rem', marginTop: '3rem', textAlign: 'center' }}>
          © 2026 Sumit Pandey. Built with React + Framer Motion.
        </p>
      </div>
    </section>
  )
}