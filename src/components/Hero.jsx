import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Hey! I'm Darlene – a creative product designer based in London.
        </h1>
        <a href="#work" className={styles.cta}>Explore my work</a>
      </div>
    </section>
  )
}
