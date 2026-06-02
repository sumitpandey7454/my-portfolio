import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = links.map(link => {
      const el = document.getElementById(link.toLowerCase())
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(link) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(59,130,246,0.15)' : 'none',
          transition: 'all 0.4s ease',
          padding: '0 2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          height: '70px',
          boxSizing: 'border-box'
        }}>

        {/* logo */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.85rem', fontWeight: 900, color: '#fff',
              flexShrink: 0
            }}>SP</motion.div>
          <span style={{
            fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Sumit<span style={{ WebkitTextFillColor: '#3b82f6' }}>.</span></span>
        </motion.a>

        {/* desktop links */}
        <ul style={{
          display: 'flex', gap: '0.25rem', listStyle: 'none',
          margin: 0, padding: 0,
          background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent',
          border: scrolled ? '1px solid rgba(59,130,246,0.1)' : 'none',
          borderRadius: '50px', padding: scrolled ? '0.35rem' : '0',
          transition: 'all 0.4s ease'
        }} className="desktop-menu">
          {links.map(l => (
            <li key={l} style={{ position: 'relative' }}>
              <motion.a href={`#${l.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                style={{
                  color: active === l ? '#fff' : '#94a3b8',
                  textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500,
                  padding: '0.45rem 1rem', borderRadius: '50px', display: 'block',
                  background: active === l ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative', zIndex: 1
                }}
                onMouseEnter={e => {
                  if (active !== l) e.currentTarget.style.color = '#fff'
                  if (active !== l) e.currentTarget.style.background = 'rgba(59,130,246,0.1)'
                }}
                onMouseLeave={e => {
                  if (active !== l) e.currentTarget.style.color = '#94a3b8'
                  if (active !== l) e.currentTarget.style.background = 'transparent'
                }}>
                {l}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* right side — hire me button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.a href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="hire-btn"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: '#fff', padding: '0.5rem 1.25rem',
              borderRadius: '8px', textDecoration: 'none',
              fontWeight: 600, fontSize: '0.85rem',
              boxShadow: '0 0 15px rgba(59,130,246,0.2)',
              display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>⚡</motion.span>
            Hire Me
          </motion.a>

          {/* hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{
              background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
              color: '#fff', cursor: 'pointer', display: 'none',
              borderRadius: '8px', padding: '0.4rem',
              alignItems: 'center', justifyContent: 'center'
            }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(59,130,246,0.15)',
              padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'
            }}>
            {links.map((l, i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setOpen(false)}
                style={{
                  color: active === l ? '#3b82f6' : '#94a3b8',
                  textDecoration: 'none', fontSize: '1rem', fontWeight: 500,
                  padding: '0.75rem 1rem', borderRadius: '10px',
                  background: active === l ? 'rgba(59,130,246,0.1)' : 'transparent',
                  borderLeft: active === l ? '2px solid #3b82f6' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}>
                {l}
              </motion.a>
            ))}
            <motion.a href="#contact"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              onClick={() => setOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: '#fff', padding: '0.75rem 1rem', borderRadius: '10px',
                textDecoration: 'none', fontWeight: 600, textAlign: 'center', marginTop: '0.5rem'
              }}>
              ⚡ Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hire-btn { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}