import styles from './ListPage.module.css'

const PLACES = [
  { country: 'Portugal', city: 'Lisbon',        year: '2024', note: 'Tiles, hills, and the best custard tarts.' },
  { country: 'Japan',    city: 'Tokyo',          year: '2023', note: 'Quiet temples next to neon arcades.' },
  { country: 'Italy',    city: 'Rome',           year: '2022', note: 'Every corner is a museum.' },
  { country: 'Morocco',  city: 'Marrakech',      year: '2022', note: 'Overwhelming in the best way.' },
  { country: 'France',   city: 'Paris',          year: '2021', note: 'Will always return.' },
  { country: 'Mexico',   city: 'Oaxaca',         year: '2020', note: 'Food, colour, and mezcal.' },
]

export default function TravelList() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>About → Travel</p>
          <h1 className={styles.title}>Places I've been</h1>
          <p className={styles.sub}>{PLACES.length} countries and counting.</p>
        </header>
        <ul className={styles.list}>
          {PLACES.map((p, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.city}>{p.city}</span>
                <span className={styles.country}>{p.country}</span>
              </div>
              <span className={styles.note}>{p.note}</span>
              <span className={styles.year}>{p.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
