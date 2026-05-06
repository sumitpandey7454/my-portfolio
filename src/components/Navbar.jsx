import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #1f2937' : 'none',
      transition: 'all 0.3s ease',
      padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#3b82f6' }}>Sumit.</span>
      <ul style={{ display: open ? 'flex' : 'none', flexDirection: 'column', position: 'absolute', top: '60px', left: 0, width: '100%', background: '#0a0a0a', padding: '1rem 2rem', gap: '1rem', listStyle: 'none' }}
        className="mobile-menu">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
            style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '1rem' }}>{l}</a></li>
        ))}
      </ul>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-menu">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}
            style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#3b82f6'}
            onMouseLeave={e => e.target.style.color = '#d1d5db'}>{l}</a></li>
        ))}
      </ul>
      <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }} className="hamburger">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  )
}