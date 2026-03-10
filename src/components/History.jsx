import { useInView } from 'react-intersection-observer'
import './History.css'

const TIMELINE = [
  {
    year: '2004',
    icon: '🇮🇹',
    title: 'Zrodenie názvu',
    desc: 'Počas tábora v Taliansku traja zakladajúci členovia pomenujú svoje športové družstvo „Delfínici" – aby sa odčlenili od zvyšných „serióznych a drsných" názvov.',
  },
  {
    year: '2008',
    icon: '📋',
    title: 'Oficiálny vznik',
    desc: 'Občianske združenie Delfínici vzniká oficiálne a je zapísané do Registra Ministerstva vnútra Slovenskej republiky.',
  },
  {
    year: '2012',
    icon: '🏐',
    title: 'Plážový volejbal',
    desc: 'Združenie začína aktívne organizovať plážový volejbal. Pribudajú tréningy v telocvični v Dúbravke a plány na prvý turnaj.',
  },
  {
    year: 'dnes',
    icon: '🚀',
    title: 'Rast a expanzia',
    desc: 'Desiatky členov, tri hlavné športy, turnaje, kempy a stále otvorené dvere pre každého, kto chce byť aktívny.',
  },
]

function TimelineItem({ year, icon, title, desc, isLast, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div ref={ref} className={`timeline-item fade-up fade-up-delay-${(index % 4) + 1}${inView ? ' visible' : ''}`}>
      <div className="timeline-item__left">
        <div className="timeline-item__year">{year}</div>
        <div className="timeline-item__line-wrap">
          <div className="timeline-item__dot">{icon}</div>
          {!isLast && <div className="timeline-item__line" />}
        </div>
      </div>
      <div className="timeline-item__body">
        <h3 className="timeline-item__title">{title}</h3>
        <p className="timeline-item__desc">{desc}</p>
      </div>
    </div>
  )
}

export default function History() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="historia" className="section history">
      <div className="container">
        <div ref={ref} className={`history__head fade-up${inView ? ' visible' : ''}`}>
          <div className="section-label">📖 História</div>
          <h2 className="section-title">Ako to začalo</h2>
          <p className="section-sub">
            Naša neoficiálna história siaha ešte oveľa ďalej, než je dátum oficálneho vzniku.
            Všetko začalo v roku 2004 v Taliansku…
          </p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.year} {...item} index={i} isLast={i === TIMELINE.length - 1} />
          ))}
        </div>

        <div className={`history__callout fade-up fade-up-delay-2${inView ? ' visible' : ''}`}>
          <span className="history__callout-emoji">🐬</span>
          <p>
            Pomenovanie sa uchytilo natoľko, že aj po návrate na Slovensko sa každý
            športový tím, v ktorom sa zakladatelia objavili, volal rovnako. Časom si
            na tento názov zvykli aj rodina, spolužiaci, kamaráti a susedia –
            a tak sa začalo formovať združenie Delfínici.
          </p>
        </div>
      </div>
    </section>
  )
}
