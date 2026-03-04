import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <span className={styles.label}>About</span>
        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
              I'm a product designer who believes great work is made with care, intention, and a
              deep curiosity about people. I'm drawn to the details others skip — the
              micro-interaction, the right word, the texture of an interface.
            </p>
            <p>
              Currently building <strong>Tapestry</strong> — a tool for capturing and
              understanding your inner life. Previously at Fabric.
            </p>
          </div>
          <div className={styles.links}>
            <Link to="/travel" className={styles.linkCard}>
              <span className={styles.linkIcon}>✈</span>
              <div>
                <div className={styles.linkTitle}>Travel list</div>
                <div className={styles.linkSub}>Places I've been</div>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
            <Link to="/bucket-list" className={styles.linkCard}>
              <span className={styles.linkIcon}>☆</span>
              <div>
                <div className={styles.linkTitle}>Bucket list</div>
                <div className={styles.linkSub}>Things I want to do</div>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
