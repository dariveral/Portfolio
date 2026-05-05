import styles from './TravelList.module.css'

import photoSaltLake   from '../assets/Travel list/salt lake.webp'
import photoKawasan    from '../assets/Travel list/Kawasan.webp'
import photoJapanKimono from '../assets/Travel list/Japan kimono.webp'
import photoRocinha    from '../assets/Travel list/Rocinha.webp'

import stampAustria     from '../assets/Travel list/Austria.webp'
import stampBermuda     from '../assets/Travel list/Bermuda.webp'
import stampBrazil      from '../assets/Travel list/Brazil.webp'
import stampFrance      from '../assets/Travel list/France.webp'
import stampGreece      from '../assets/Travel list/Greece.webp'
import stampItaly       from '../assets/Travel list/Italy.webp'
import stampJapan       from '../assets/Travel list/Japan.webp'
import stampMadeira     from '../assets/Travel list/Madeira.webp'
import stampNetherlands from '../assets/Travel list/Netherlands.webp'
import stampPhilippines from '../assets/Travel list/Philippines.webp'
import stampSlovakia    from '../assets/Travel list/Slovakia.webp'
import stampSpain       from '../assets/Travel list/Spain.webp'
import stampTurkey      from '../assets/Travel list/Turkey.webp'
import stampUK          from '../assets/Travel list/UK.webp'
import stampUSA         from '../assets/Travel list/USA.webp'
import stampVatican     from '../assets/Travel list/Vatican.webp'

const STAMPS = [
  { name: 'Austria',     img: stampAustria },
  { name: 'Bermuda',     img: stampBermuda },
  { name: 'Brazil',      img: stampBrazil },
  { name: 'France',      img: stampFrance },
  { name: 'Greece',      img: stampGreece },
  { name: 'Italy',       img: stampItaly },
  { name: 'Japan',       img: stampJapan },
  { name: 'Madeira',     img: stampMadeira },
  { name: 'Netherlands', img: stampNetherlands },
  { name: 'Philippines', img: stampPhilippines },
  { name: 'Slovakia',    img: stampSlovakia },
  { name: 'Spain',       img: stampSpain },
  { name: 'Turkey',      img: stampTurkey },
  { name: 'UK',          img: stampUK },
  { name: 'USA',         img: stampUSA },
  { name: 'Vatican',     img: stampVatican },
]

const UN_COUNT = 15
const TOTAL = 16

const COMING_SOON = []

export default function TravelList() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>Darlene's travels</h1>
        <p className={styles.heroSub}>My travel check list</p>
        <div className={styles.photoGrid}>
          <div className={styles.photoCell}><img src={photoSaltLake} alt="" /></div>
          <div className={styles.photoCell}><img src={photoKawasan} alt="" /></div>
          <div className={styles.photoCell}><img src={photoJapanKimono} alt="" /></div>
          <div className={styles.photoCell}><img src={photoRocinha} alt="" /></div>
        </div>
      </section>

      {/* Stamps */}
      <section className={styles.stampsSection}>
        <div className={styles.stampsHeader}>
          <p className={styles.stampsTitle}>
            Countries I've visited{' '}
            <span className={styles.stampsCount}>[{UN_COUNT}/195]</span>
            <span className={styles.stampsNote}> (UN recognised)</span>
          </p>
          <p className={styles.stampsTotal}>Total: {TOTAL}</p>
        </div>
        <div className={styles.stampsGrid}>
          {STAMPS.map(s => (
            <div key={s.name} className={styles.stampItem}>
              <img src={s.img} alt={s.name} className={styles.stampImg} />
              <span className={styles.stampName}>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Visiting Soon */}
      {COMING_SOON.length > 0 && (
        <section className={styles.stampsSection}>
          <div className={styles.stampsHeader}>
            <p className={styles.stampsTitle}>Countries I'm visiting soon! 🤩</p>
          </div>
          <div className={styles.stampsGrid}>
            {COMING_SOON.map(s => (
              <div key={s.name} className={styles.stampItem}>
                <img src={s.img} alt={s.name} className={styles.stampImg} />
                <span className={styles.stampName}>{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
