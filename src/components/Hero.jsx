import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Product Designer</p>
        <h1 className={styles.heading}>
          Darlene Rivera<span className={styles.l}>l</span>
        </h1>
        <p className={styles.sub}>
          I design with care and curiosity — building products that feel{' '}
          <em>made</em>, not assembled.
        </p>
        <div className={styles.cta}>
          <a href="#work" className={styles.primary}>View work</a>
          <a href="#contact" className={styles.secondary}>Get in touch</a>
        </div>
      </div>
    </section>
  )
}
