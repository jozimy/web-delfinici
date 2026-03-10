import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Real team photo as background */}
      <div className="hero__photo-bg">
        <img src="/images/team-football.jpg" alt="Delfínici team" />
      </div>
      {/* Gradient overlay on top of photo */}
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          Občianske združenie · od roku 2008
        </div>

        <h1 className="hero__title">
          Buď aktívny
        </h1>

        <p className="hero__sub">
          Staň sa členom ešte dnes<br className="hero__br" /> a začni novú cestu
        </p>

        <p className="hero__desc">
          Sme parta kamarátov, ktorú spája šport, dobrá nálada a túžba
          byť aktívny. Futbal, hokej, volejbal – a čokoľvek, čo práve
          príde do cesty.
        </p>

        <div className="hero__actions">
          <button className="btn btn-primary hero__btn-main"
            onClick={() => scrollTo('#pridaj-sa')}>
            Pridaj sa k nám
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn btn-outline"
            onClick={() => scrollTo('#o-nas')}>
            Zistiť viac
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>2008</strong>
            <span>rok vzniku</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <strong>3</strong>
            <span>hlavné športy</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <strong>Dúbravka</strong>
            <span>naša základňa</span>
          </div>
        </div>
      </div>

      <div className="wave wave--hero">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  )
}
