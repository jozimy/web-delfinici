import { useInView } from 'react-intersection-observer'
import './Contact.css'

const INFO = [
  { icon: '✉️', label: 'E-mail',   value: 'delfinici@delfinici.sk', href: 'mailto:delfinici@delfinici.sk' },
  { icon: '📍', label: 'Adresa',   value: 'Janka Alexyho 9, 841 01, Slovensko' },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="kontakt" className="section contact">
      <div className="container">
        <div ref={ref} className={`contact__head fade-up${inView ? ' visible' : ''}`}>
          <div className="section-label">📬 Kontakt</div>
          <h2 className="section-title">Ozvi sa nám</h2>
          <p className="section-sub">
            Zaujíma ťa niečo, chceš sa pripojiť alebo len zistiť, kedy bude
            ďalší tréning? Napíš nám!
          </p>
        </div>

        <div className="contact__grid">
          <div className={`contact__info fade-up fade-up-delay-1${inView ? ' visible' : ''}`}>
            {INFO.map(item => (
              <div key={item.label} className="contact__info-row">
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <div className="contact__info-label">{item.label}</div>
                  <div className="contact__info-value">
                    {item.href
                      ? <a href={item.href}>{item.value}</a>
                      : item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="contact__social">
              <a href="https://www.facebook.com/delfinici" target="_blank" rel="noopener noreferrer"
                className="contact__social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>

            <div className="contact__note">
              <span>💡</span>
              <p>Na správy odpovedáme zvyčajne do 1–2 dní. Tešíme sa na teba!</p>
            </div>
          </div>

          <div className={`contact__mailto fade-up fade-up-delay-2${inView ? ' visible' : ''}`}>
            <div className="contact__mailto-icon">✉️</div>
            <h3 className="contact__mailto-title">Napíš nám e-mail</h3>
            <p className="contact__mailto-text">
              Zaujíma ťa niečo, chceš sa pripojiť alebo máš otázku? Klikni nižšie a pošli nám správu priamo z tvojho e-mailu.
            </p>
            <a href="mailto:delfinici@delfinici.sk?subject=Dopytu%20z%20webu%20delfinici.sk"
              className="btn btn-primary contact__mailto-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="22,4 12,13 2,4"/>
              </svg>
              delfinici@delfinici.sk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
