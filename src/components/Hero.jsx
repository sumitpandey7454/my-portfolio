import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const roles = ['Software Developer', 'Java Backend Dev', 'Spring Boot Expert', 'Freelance Software Engineer']

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 4
}))

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  // typing effect
  useEffect(() => {
    let timeout
    const current = roles[index]
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setIndex((index + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, index])

  // mouse parallax
  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section ref={sectionRef} id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '80px 1rem 0', position: 'relative', overflow: 'hidden',
      background: '#0a0a0a'
    }}>

      {/* animated gradient bg */}
      <motion.div animate={{
        background: [
          'radial-gradient(ellipse at 20% 50%, #1e3a5f 0%, #0a0a0a 60%)',
          'radial-gradient(ellipse at 80% 50%, #1e1a4f 0%, #0a0a0a 60%)',
          'radial-gradient(ellipse at 50% 20%, #1e3a5f 0%, #0a0a0a 60%)',
          'radial-gradient(ellipse at 20% 50%, #1e3a5f 0%, #0a0a0a 60%)',
        ]
      }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* floating particles */}
      {particles.map(p => (
        <motion.div key={p.id}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            borderRadius: '50%',
            background: p.id % 3 === 0 ? '#3b82f6' : p.id % 3 === 1 ? '#8b5cf6' : '#1dbf73',
            zIndex: 1, pointerEvents: 'none'
          }} />
      ))}

      {/* parallax blobs */}
      <motion.div animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute', top: '15%', left: '10%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          zIndex: 1, pointerEvents: 'none'
        }} />
      <motion.div animate={{ x: -mousePos.x * 0.3, y: -mousePos.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          zIndex: 1, pointerEvents: 'none'
        }} />

      {/* main content */}
      <motion.div animate={{ x: mousePos.x * 0.02, y: mousePos.y * 0.02 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{ position: 'relative', zIndex: 2 }}>

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1dbf73', boxShadow: '0 0 8px #1dbf73' }} />
          <span style={{
            background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)',
            color: '#93c5fd', fontSize: '0.82rem', padding: '0.3rem 1rem',
            borderRadius: '20px', letterSpacing: '0.1em'
          }}>Available for Full-Time Roles</span>
        </motion.div>

        {/* greeting */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ color: '#64748b', fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          👋 Hello, I'm
        </motion.p>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900,
            marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
          Sumit Pandey
        </motion.h1>

        {/* typing */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1.5rem',
            minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px'
          }}>
          <span style={{ color: '#64748b' }}>{'<'}</span>
          <span style={{ color: '#3b82f6', fontWeight: 700, fontFamily: 'monospace' }}>{displayed}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }}
            style={{ color: '#3b82f6', fontWeight: 700, fontFamily: 'monospace' }}>|</motion.span>
          <span style={{ color: '#64748b' }}>{'/>'}</span>
        </motion.div>

        {/* description */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          style={{ color: '#64748b', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontSize: '1rem' }}>
          Motivated Software Developer with expertise in
          <span style={{ color: '#93c5fd', fontWeight: 600 }}> Java, Spring Boot</span> &
          <span style={{ color: '#93c5fd', fontWeight: 600 }}> MERN stack</span>.
          Passionate about building scalable REST APIs, clean architecture & freelancing on Fiverr.
        </motion.p>

        {/* stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { number: '3+', label: 'Projects' },
            { number: '2+', label: 'Internships' },
            { number: '76%', label: 'B.Tech CGPA' },
            { number: '⚡', label: 'LeetCode Active' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, y: -3 }}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.15)',
                borderRadius: '12px', padding: '0.75rem 1.25rem', minWidth: '80px'
              }}>
              <p style={{ color: '#3b82f6', fontSize: '1.3rem', fontWeight: 800 }}>{stat.number}</p>
              <p style={{ color: '#475569', fontSize: '0.75rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>

          <motion.a href="#contact" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: '#fff', padding: '0.85rem 2.25rem',
              borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
              boxShadow: '0 0 20px rgba(59,130,246,0.3)', display: 'inline-block'
            }}>
            Contact Me
          </motion.a>

          <motion.a href="/resume.pdf" target="_blank" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent',
              border: '1px solid rgba(59,130,246,0.5)', color: '#93c5fd',
              padding: '0.85rem 2.25rem', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
            <Download size={16} /> View Resume
          </motion.a>
        </motion.div>

        {/* social icons */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {[
            { icon: '🐙', href: 'https://github.com/sumitpandey7454', label: 'GitHub' },
            { icon: '💼', href: 'https://www.linkedin.com/in/sumit-pandey-5519b7276', label: 'LinkedIn' },
            { icon: '📧', href: 'mailto:sumitpandey7454@gmail.com', label: 'Email' },
            { icon: '🟢', href: 'https://www.fiverr.com/sumitpandey7454', label: 'Fiverr' },
          ].map((s, i) => (
            <motion.a key={i} href={s.href} target="_blank"
              whileHover={{ scale: 1.2, y: -4 }} whileTap={{ scale: 0.95 }}
              title={s.label}
              style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', textDecoration: 'none', transition: 'border-color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'}>
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          <span style={{ color: '#334155', fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL</span>
          <ArrowDown size={16} color="#334155" />
        </motion.div>

      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}