import styles from './TravelList.module.css'

import photoSaltLake   from '../assets/Travel list/salt lake.jpg'
import photoKawasan    from '../assets/Travel list/Kawasan.jpg'
import photoMilan      from '../assets/Travel list/Milan.jpg'
import photoRocinha    from '../assets/Travel list/Rocinha.JPG'

import stampAustria     from '../assets/Travel list/Austria.png'
import stampBermuda     from '../assets/Travel list/Bermuda.png'
import stampBrazil      from '../assets/Travel list/Brazil.png'
import stampFrance      from '../assets/Travel list/France.png'
import stampGreece      from '../assets/Travel list/Greece.png'
import stampItaly       from '../assets/Travel list/Italy.png'
import stampJapan       from '../assets/Travel list/Japan.png'
import stampMadeira     from '../assets/Travel list/Madeira.png'
import stampNetherlands from '../assets/Travel list/Netherlands.png'
import stampPhilippines from '../assets/Travel list/Philippines.png'
import stampSlovakia    from '../assets/Travel list/Slovakia.png'
import stampSpain       from '../assets/Travel list/Spain.png'
import stampTurkey      from '../assets/Travel list/Turkey.png'
import stampUK          from '../assets/Travel list/UK.png'
import stampUSA         from '../assets/Travel list/USA.png'
import stampVatican     from '../assets/Travel list/Vatican.png'

const STAMPS = [
  { name: 'Austria',     img: stampAustria },
  { name: 'Bermuda',     img: stampBermuda },
  { name: 'Brazil',      img: stampBrazil },
  { name: 'France',      img: stampFrance },
  { name: 'Greece',      img: stampGreece },
  { name: 'Italy',       img: stampItaly },
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

const UN_COUNT = 14
const TOTAL = 15

const COMING_SOON = [
  { name: 'Japan', img: stampJapan },
]

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
          <div className={styles.photoCell}><img src={photoMilan} alt="" /></div>
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

    </div>
  )
}
