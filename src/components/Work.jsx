import { Link } from 'react-router-dom'
import styles from './Work.module.css'
import caseStudyHome from '../assets/case study home.png'
import airbnbHomeMockup from '../assets/Airbnb landscape - home mockup.png'
import airbnbSearchMockup from '../assets/Airbnb landscape - search mockup 6.png'

const CASE_STUDIES = [
  {
    id: 'airbnb-landscape',
    label: 'Case Study',
    title: 'Reimagining the Airbnb app in landscape mode on iOS',
    href: '/landscape-airbnb-on-ios',
    bgImage: caseStudyHome,
    textColor: '#ffffff',
    mockups: [airbnbHomeMockup, airbnbSearchMockup],
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="#0037ff" strokeWidth="2.5" />
            <path d="M12 12L22 22M22 22H14M22 22V14" stroke="#0037ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className={styles.heading}>Explore my work</h2>
        </div>
        <div className={styles.grid}>
          {CASE_STUDIES.map(cs => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ cs }) {
  return (
    <div
      className={styles.card}
      style={{
        background: cs.bgImage ? `url(${cs.bgImage}) center/cover no-repeat` : cs.bg,
        color: cs.textColor,
      }}
    >
      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>{cs.label}</span>
        <h3 className={styles.cardTitle}>{cs.title}</h3>
        <Link to={cs.href} className={styles.cardBtn}>
          View work
        </Link>
      </div>
      <div className={styles.cardMockupFrame}>
        {cs.mockups.map((src, i) => (
          <img key={i} src={src} alt="" className={styles.mockupImg} />
        ))}
      </div>
    </div>
  )
}
