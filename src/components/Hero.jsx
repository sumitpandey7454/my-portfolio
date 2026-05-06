import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['Software Developer', 'Java Backend Dev', 'MERN Stack Dev', 'Spring Boot Expert']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout
    const current = roles[index]
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1500)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setIndex((index + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, index])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '0 1rem',
      background: 'radial-gradient(ellipse at top, #1e3a5f 0%, #0a0a0a 60%)'
    }}>
      <div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
          👋 Hello, I'm
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Sumit Pandey
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#3b82f6', marginBottom: '1.5rem', minHeight: '2rem' }}>
          {displayed}<span style={{ borderRight: '2px solid #3b82f6', animation: 'blink 0.7s infinite' }}>|</span>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '1rem' }}>
          Motivated Software Developer with expertise in Java, Spring Boot & MERN stack.
          Passionate about building scalable REST APIs and clean architecture.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a href="#contact" style={{
            background: '#3b82f6', color: '#fff', padding: '0.75rem 2rem',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
            transition: 'transform 0.2s, background 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" style={{
            border: '1px solid #3b82f6', color: '#3b82f6', padding: '0.75rem 2rem',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <Download size={16} /> View Resume
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          {[
  { icon: '🐙', href: 'https://github.com/sumitpandey7454' },
  { icon: '💼', href: 'https://linkedin.com/in/sumit-pandey' },
  { icon: '📧', href: 'mailto:sumitpandey7454@gmail.com' },
].map((s, i) => (
  <a key={i} href={s.href} target="_blank" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>{s.icon}</a>
))}
        </motion.div>
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}