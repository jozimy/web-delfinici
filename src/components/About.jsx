import { useInView } from 'react-intersection-observer'
import './About.css'

const ACTIVITIES = [
  { icon: '⚽', label: 'Futbal' },
  { icon: '🏒', label: 'Hokej' },
  { icon: '🏐', label: 'Volejbal' },
  { icon: '🏸', label: 'Bedminton' },
  { icon: '🎾', label: 'Tenis' },
  { icon: '🎯', label: 'Squash' },
  { icon: '🎲', label: 'Spoločenské hry' },
  { icon: '🤝', label: 'Dobrovoľníctvo' },
]

export default function About() {
  const { ref: headRef, inView: headIn } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: gridRef, inView: gridIn } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="o-nas" className="section about">
      <div className="container">
        <div className="about__layout">
          <div ref={headRef} className={`about__text fade-up${headIn ? ' visible' : ''}`}>
            <div className="section-label">🐬 O nás</div>
            <h2 className="section-title">Šport, kamaráti<br />a dobrá nálada</h2>
            <p className="about__p">
              Aktuálne sa v Delfínikoch venujeme najmä <strong>futbalu, hokeju a volejbalu</strong>.
              Ani iné športy nám ale nie sú cudzie a vždy záleží na konkrétnom období
              a príležitostiach.
            </p>
            <p className="about__p">
              Okrem športov sa tiež stretávame pri hraní spoločenských hier a kariet
              a ak sa naskytne príležitosť, zapájame sa do rôznych <strong>dobrovoľníckych aktivít</strong>.
            </p>
            <p className="about__p">
              V súvislosti so športmi organizujeme pravidelné tréningy a zápasy.
              Podľa potreby vieme zaistiť aj väčšie aktivity ako <strong>turnaje alebo kempy</strong>.
              Ak ťa zaujíma, kedy najbližšie organizujeme nejakú aktivitu, neváhaj nás kontaktovať.
            </p>

            <a href="#kontakt" className="btn btn-primary about__cta"
              onClick={e => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Kontaktuj nás
            </a>
          </div>

          <div ref={gridRef} className={`about__grid fade-up fade-up-delay-2${gridIn ? ' visible' : ''}`}>
            <div className="about__grid-title">Čo robíme</div>
            <div className="about__activities">
              {ACTIVITIES.map((a, i) => (
                <div key={a.label} className={`activity-chip fade-up fade-up-delay-${(i % 4) + 1}${gridIn ? ' visible' : ''}`}>
                  <span>{a.icon}</span>
                  {a.label}
                </div>
              ))}
            </div>

            <div className="about__quote-card">
              <div className="about__quote-mark">"</div>
              <p>Šport nás učí trpezlivosti,<br />odhodlaniu a sile charakteru.</p>
              <div className="about__quote-author">— Delfínici</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
