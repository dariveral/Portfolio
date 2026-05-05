import styles from './AirbnbCaseStudy.module.css'

export default function NewCaseStudy() {
  return (
    <main>

      {/* Hero */}
      <section className={styles.hero} style={{ backgroundColor: '#000000' }}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>Label</span>
          <h1 className={styles.heroTitle}>New Case Study Title</h1>
          <a href="#" className={styles.heroBtn}>Download full case study</a>
        </div>
      </section>

      {/* Description */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContent}>
          <p className={styles.descriptionBody}>
            Description paragraph one.
          </p>
          <p className={styles.descriptionBody}>
            Description paragraph two.
          </p>
          <p className={styles.descriptionBody}>
            Description paragraph three.
          </p>
        </div>
      </section>

    </main>
  )
}
