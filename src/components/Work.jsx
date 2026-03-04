import { Link } from 'react-router-dom'
import styles from './Work.module.css'

const CASE_STUDIES = [
  {
    id: 'airbnb-landscape',
    label: 'Case Study',
    title: 'Reimagining the Airbnb app in landscape mode on iOS',
    href: '/work/airbnb-landscape',
    // Replace with your actual image: image: '/airbnb-preview.jpg'
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Explore my work</h2>
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
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {cs.image
          ? <img src={cs.image} alt={cs.title} />
          : <div className={styles.imagePlaceholder} />
        }
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardLabel}>{cs.label}</span>
        <h3 className={styles.cardTitle}>{cs.title}</h3>
        <Link to={cs.href} className={styles.cardLink}>View work</Link>
      </div>
    </div>
  )
}
