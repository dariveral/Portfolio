import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
              Hey, I'm Darlene – a creative product designer based in London. I love building
              products that feel considered and crafted, with a strong eye for detail and a deep
              curiosity about people.
            </p>
            <p>
              I'm drawn to the intersection of design and emotion — where an interface
              becomes something you actually enjoy using.
            </p>
          </div>
          <div className={styles.extras}>
            <Link to="/travel" className={styles.extraCard}>
              <span className={styles.extraTitle}>Travel list</span>
              <span className={styles.extraArrow}>→</span>
            </Link>
            <Link to="/bucket-list" className={styles.extraCard}>
              <span className={styles.extraTitle}>Bucket list</span>
              <span className={styles.extraArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
