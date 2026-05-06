import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
const links = [
  { icon: <Mail size={20} />, label: 'sumitpandey7454@gmail.com', href: 'mailto:sumitpandey7454@gmail.com' },
  { icon: <Phone size={20} />, label: '+91 7454824558', href: 'tel:+917454824558' },
  { icon: '💼', label: 'linkedin.com/in/sumit-pandey-5519b7276', href: 'https://www.linkedin.com/in/sumit-pandey-5519b7276' },
  { icon: '🐙', label: 'github.com/sumitpandey7454', href: 'https://github.com/sumitpandey7454' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Get In <span style={{ color: '#3b82f6' }}>Touch</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#3b82f6', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            I'm open to full-time Software Developer / Backend roles. Feel free to reach out!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map((l, i) => (
              <motion.a key={i} href={l.href} target="_blank"
                whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: '#111827', border: '1px solid #1f2937',
                  borderRadius: '12px', padding: '1rem 1.5rem',
                  textDecoration: 'none', color: '#d1d5db', transition: 'color 0.2s'
                }}>
                <span style={{ color: '#3b82f6' }}>{l.icon}</span>
                <span style={{ fontSize: '0.95rem' }}>{l.label}</span>
              </motion.a>
            ))}
          </div>
          <p style={{ color: '#374151', fontSize: '0.85rem', marginTop: '3rem' }}>
            © 2025 Sumit Pandey. Built with React + Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}