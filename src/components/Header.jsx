import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'O nás',     href: '#o-nas' },
  { label: 'Športy',    href: '#sporty' },
  { label: 'Členovia',  href: '#clenovia' },
  { label: 'História',  href: '#historia' },
  { label: 'Kontakt',   href: '#kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="header__logo-icon">🐬</span>
          <span className="header__logo-text">Delf<span>í</span>nici</span>
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="header__nav-link"
              onClick={e => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#pridaj-sa" className="btn btn-primary header__cta"
            onClick={e => handleNav(e, '#pridaj-sa')}>
            Pridaj sa k nám
          </a>
        </nav>

        <button className={`header__burger${menuOpen ? ' open' : ''}`}
          aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
