import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.connect}>Connect</span>
        <div className={styles.links}>
          <a href="mailto:darleneriveral@icloud.com" className={styles.link}>Email</a>
          <a href="https://instagram.com/pixeldais" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/in/darleneelzbethriveral" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
