import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.4)]' : ''}`}>
      <div className="max-w-5xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wide hover:text-accent transition-colors">
          KG<span className="text-accent">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium relative pb-1 transition-colors group
                  ${active === link.href.slice(1) ? 'text-white' : 'text-secondary hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300
                  ${active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire me CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary py-2 px-5 text-xs">
          Hire me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-dark/98 backdrop-blur-md border-b border-white/5 transition-all duration-300 overflow-hidden ${open ? 'max-h-72' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-5 py-6">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary py-2 px-5 text-xs" onClick={() => setOpen(false)}>
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
