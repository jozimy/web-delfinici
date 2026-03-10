import { useInView } from 'react-intersection-observer'
import './Members.css'


export default function Members() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="clenovia" className="section members">
      <div className="members__bg-wave wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>

      <div className="container">
        <div ref={ref} className={`members__top fade-up${inView ? ' visible' : ''}`}>
          <div className="members__text">
            <div className="section-label" style={{ background: '#fef3c7', color: '#92400e' }}>👥 Naši členovia</div>
            <h2 className="section-title" style={{ color: 'white' }}>Parta kamarátov<br />spojená športom</h2>
            <p className="members__p">
              Ak rozmýšľaš nad tým, že by si sa chcel stať členom nášho združenia,
              neváhaj nás kontaktovať!
            </p>
            <p className="members__p">
              Členom združenia sa môže stať <strong>každý, kto inklinuje k nejakému športu</strong> a chce
              sa ku nám pridať.
            </p>
            <p className="members__p">
              V súčasnosti sú Delfínici tvorení jadrom <strong>bývalých spolužiakov z Gymnázia
              Bilíkova v Dúbravke</strong>. Za necelých desať rokov pôsobenia sme sa ale rozrástli
              a momentálne evidujeme desiatky permanentných alebo príležitostných členov,
              ktorých spája nielen šport, ale aj iné aktivity a najmä <strong>priateľské prostredie
              a vzťahy</strong>.
            </p>
            <a href="#pridaj-sa" className="btn members__btn"
              onClick={e => { e.preventDefault(); document.querySelector('#pridaj-sa')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Staň sa členom
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="members__info-cards">
            <div className="members__card">
              <div className="members__card-icon">🏫</div>
              <div className="members__card-title">Základ tímu</div>
              <p>Jadro tvoria bývalí spolužiaci z Gymnázia Bilíkova v Dúbravke.</p>
            </div>
            <div className="members__card">
              <div className="members__card-icon">📈</div>
              <div className="members__card-title">Rastieme</div>
              <p>Za desať rokov desiatky permanentných i príležitostných členov.</p>
            </div>
            <div className="members__card members__card--wide">
              <div className="members__card-icon">🤝</div>
              <div className="members__card-title">Otvorení každému</div>
              <p>Stačí záujem o šport a chuť zapojiť sa.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
