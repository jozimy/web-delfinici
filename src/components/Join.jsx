import { useInView } from 'react-intersection-observer'
import './Join.css'

export default function Join() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="pridaj-sa" className="join">
      <div className="container">
        <div ref={ref} className={`join__card fade-up${inView ? ' visible' : ''}`}>
          <div className="join__left">
            <div className="join__badge">🤝 Staň sa Delfínikom</div>
            <h2 className="join__title">
              PRIDAJ SA<br />K NÁM
            </h2>
            <p className="join__desc">
              Zaujalo ťa naše združenie a chcel by si sa stať našim členom?
              Alebo si s nami chceš len zašportovať? Tak neváhaj a kontaktuj nás!
            </p>
            <p className="join__desc">
              V krátkom čase sa ti ozveme naspäť.
            </p>
            <a href="#kontakt" className="btn join__btn"
              onClick={e => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Pripojiť sa teraz
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="join__right">
            <div className="join__sport-grid">
              {['⚽', '🏒', '🏐', '🏸', '🎾', '🏕️', '🎲', '🤝'].map((icon, i) => (
                <div key={i} className="join__sport-cell" style={{ '--i': i }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
