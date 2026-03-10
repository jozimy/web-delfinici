import { useInView } from 'react-intersection-observer'
import './Sports.css'

const SPORTS = [
  {
    id: 'futbal',
    img: '/images/Delfinici_Football_S001.png',
    photoCard: true,
    photoBg: '/images/sport-football.jpg',
    color: '#16a34a',
    bg: '#f0fdf4',
    accent: '#dcfce7',
    title: 'Futbal',
    lead: 'Ťažiskový šport združenia. Rok čo rok, týždeň čo týždeň.',
    body: `Dlhodobo patrí medzi ťažiskové športy futbal. Pravidelne, týždeň čo týždeň, mesiac čo mesiac, rok čo rok, organizujú Delfínici futbalové tréningy a zápasy. Počas zimného obdobia v telocvični a v lete na umelej tráve.

Už niekoľko rokov po sebe sa viacerí členovia tiež zúčastňujú absolventského turnaja na Bilíkovej ulici. V minulosti tiež Delfínici organizovali Dúbravskú ligu v minifutbale, ktorá sa stretla s veľmi pozitívnymi ohlasmi.`,
    quote: 'Víťazstvo nie je vždy o vyhrávaní. Je to o dávaní do toho všetko.',
    quotePerson: 'Minči',
    tags: ['Tréningy týždenne', 'Zima: telocvičňa', 'Leto: umelá tráva', 'Turnaj absolventov'],
  },
  {
    id: 'hokej',
    img: '/images/Delfinici_IceHockey_S001.png',
    photoCard: true,
    photoBg: '/images/team-hockey.jpg',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    accent: '#e0f2fe',
    title: 'Hokej',
    lead: 'Rastúci šport, ktorý priťahuje nových členov.',
    body: `Aj keď nie od začiatku, hokej sa postupne stáva ďalším významným športom v činnosti združenia. Pravidelné víkendové tréningy, príležitostné prípravné stretnutia a niekoľko účastí na turnajoch sú znakom toho, že hokeju stúpa popularita medzi členmi združenia.

Vďaka hokeju tiež Delfínici momentálne najviac expandujú a rozširujú svoju základňu o potenciálnych nových členov.`,
    quote: 'Šport neformuje charakter. Odhaľuje ho.',
    quotePerson: 'Kajo',
    tags: ['Víkendové tréningy', 'Turnaje', 'Nábor členov'],
  },
  {
    id: 'volejbal',
    img: '/images/Delfinici_BeachVolleyball_S001.png',
    photoCard: true,
    photoBg: '/images/Delfinici_MM2.png',
    color: '#d97706',
    bg: '#fffbeb',
    accent: '#fef3c7',
    title: 'Plážový volejbal',
    lead: 'Od roku 2012. Plány rastú spolu s tímom.',
    body: `Trojicu ťažiskových športov dopĺňa plážový volejbal, ktorý začalo združenie aktívne organizovať v roku 2012. Aj keď zatiaľ ide iba o pravidelné tréningy v telocvični v Dúbravke, plány sú väčšie.

Už čoskoro sa možno podarí zorganizovať aj prvý turnaj v plážovom volejbale ako sprievodnú akciu Turnaja absolventov gymnázia Bilíkova.`,
    quote: 'Hra končí len keď prestaneš hrať.',
    quotePerson: 'Rasťo',
    tags: ['Od roku 2012', 'Telocvičňa Dúbravka', 'Plánovaný turnaj'],
  },
]

function SportCard({ img, photoCard, photoBg, color, bg, accent, title, lead, body, quote, quotePerson, tags, reverse }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div ref={ref}
      className={`sport-card fade-up${inView ? ' visible' : ''}${reverse ? ' sport-card--reverse' : ''}${photoCard ? ' sport-card--photo' : ''}`}
      style={{ background: bg }}>

      {/* Visual panel */}
      {photoCard ? (
        <div className="sport-card__visual sport-card__visual--photo">
          <img src={photoBg} alt={title} className="sport-card__photo-bg" />
          <div className="sport-card__photo-overlay" />
          <div className="sport-card__photo-content">
            <blockquote className="sport-card__quote sport-card__quote--light">
              <p>„{quote}"</p>
              <cite>— {quotePerson}</cite>
            </blockquote>
            <div className="sport-card__tags sport-card__tags--light">
              {tags.map(t => (
                <span key={t} className="sport-card__tag sport-card__tag--light">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="sport-card__visual" style={{ background: accent }}>
          <img src={img} alt={title} className="sport-card__img" />
          <blockquote className="sport-card__quote" style={{ borderColor: color }}>
            <p>„{quote}"</p>
            <cite style={{ color }}>— {quotePerson}</cite>
          </blockquote>
          <div className="sport-card__tags">
            {tags.map(t => (
              <span key={t} className="sport-card__tag" style={{ background: `${color}18`, color }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Text panel */}
      <div className="sport-card__body">
        <div className="sport-card__sport-label" style={{ color }}>{title}</div>
        <h3 className="sport-card__title">{lead}</h3>
        {body.split('\n\n').map((para, i) => (
          <p key={i} className="sport-card__text">{para}</p>
        ))}
      </div>
    </div>
  )
}

export default function Sports() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="sporty" className="section sports">
      <div className="container">
        <div ref={ref} className={`sports__head fade-up${inView ? ' visible' : ''}`}>
          <div className="section-label">🏅 Športy</div>
          <h2 className="section-title">Čo hráme</h2>
          <p className="section-sub">
            Tri ťažiskové športy, desiatky zápalov a stovky odohratých minút.
            Ale tiež squash, tenis, bedminton… a čokoľvek, čo sa naskytne.
          </p>
        </div>

        <div className="sports__list">
          {SPORTS.map((s, i) => (
            <SportCard key={s.id} {...s} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className={`sports__others fade-up${inView ? ' visible fade-up-delay-3' : ''}`}>
          <div className="sports__others-label">A tiež…</div>
          <div className="sports__others-chips">
            {['🏸 Bedminton', '🎾 Tenis', '🥍 Hokejbal', '🎱 Squash', '🎲 Spoločenské hry', '🤝 Dobrovoľníctvo'].map(s => (
              <span key={s} className="sports__other-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
