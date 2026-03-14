import { Link } from 'react-router-dom'
import styles from './About.module.css'
import imgAbout from '../assets/image about.JPG'
import calypsoAbout from '../assets/calypso about.png'

export default function About() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <img src={imgAbout} alt="" className={styles.heroImgLeft} />
        <h1 className={styles.heroHeading}>Get to know me</h1>
        <img src={calypsoAbout} alt="" className={styles.heroImgRight} />
      </section>

      {/* About text */}
      <section className={styles.about}>
        <div className={styles.aboutLeft}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="#0037ff" strokeWidth="2.5" />
            <path d="M12 12L22 22M22 22H14M22 22V14" stroke="#0037ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={styles.aboutLabel}>About</span>
        </div>
        <div className={styles.aboutRight}>
          <p className={styles.body}>
            I made the leap from law to UX/UI design — and I haven't looked back. After years in legal, I realised what I loved most was understanding how people navigate complex systems and finding ways to make that experience clearer, simpler, and more human.
          </p>
          <p className={styles.body}>
            Today I design digital products with a focus on user journey mapping and thoughtful interaction. I'm especially drawn to the role AI can play in making experiences feel more intuitive — and I'm always exploring how emerging tools can serve real people in meaningful ways.
          </p>
        </div>
      </section>

      {/* My Lists */}
      <section className={styles.about}>
        <div className={styles.aboutLeft}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="#0037ff" strokeWidth="2.5" />
            <path d="M12 12L22 22M22 22H14M22 22V14" stroke="#0037ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={styles.aboutLabel}>My lists</span>
        </div>
        <div className={styles.aboutRight}>
          <Link to="/travel" className={styles.listCard}>
            <span className={styles.listTitle}>Travel List</span>
            <span className={styles.listArrow}>→</span>
          </Link>
          <Link to="/bucket-list" className={styles.listCard}>
            <span className={styles.listTitle}>Bucket List</span>
            <span className={styles.listArrow}>→</span>
          </Link>
        </div>
      </section>

    </div>
  )
}
