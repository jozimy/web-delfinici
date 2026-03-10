import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__wave wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="#f8fafc"/>
        </svg>
      </div>

      <div className="container footer__body">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🐬</span>
            <span>Delfínici</span>
          </div>
          <p className="footer__tagline">
            Šport nás učí trpezlivosti,<br />
            odhodlaniu a sile charakteru.
          </p>
          <div className="footer__reg">
            <small>Občianske združenie</small>
            <small>Reg. MV SR · vznik 2008</small>
          </div>
        </div>

        <div className="footer__links-group">
          <div className="footer__links-title">Navigácia</div>
          {[
            ['O nás', '#o-nas'],
            ['Športy', '#sporty'],
            ['Členovia', '#clenovia'],
            ['História', '#historia'],
            ['Kontakt', '#kontakt'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="footer__link"
              onClick={e => { e.preventDefault(); scrollTo(href) }}>
              {label}
            </a>
          ))}
        </div>

        <div className="footer__links-group">
          <div className="footer__links-title">Športy</div>
          <span className="footer__link footer__link--plain">⚽ Futbal</span>
          <span className="footer__link footer__link--plain">🏒 Hokej</span>
          <span className="footer__link footer__link--plain">🏐 Plážový volejbal</span>
          <span className="footer__link footer__link--plain">🏸 Bedminton & ďalšie</span>
        </div>

        <div className="footer__links-group">
          <div className="footer__links-title">Kontakt</div>
          <p className="footer__contact-item">✉️ delfinici@delfinici.sk</p>
          <p className="footer__contact-item">📍 Janka Alexyho 9</p>
          <p className="footer__contact-item">841 01, Slovensko</p>
          <div className="footer__social">
            <a href="https://www.facebook.com/delfinici" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" className="footer__social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {YEAR} Delfínici – Občianske združenie. Všetky práva vyhradené.</p>
          <p>Navrhnuté s <span style={{ color: '#f87171' }}>♥</span> pre Delfínikov</p>
        </div>
      </div>
    </footer>
  )
}
