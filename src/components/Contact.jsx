import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Connect</h2>
        <p className={styles.links}>
          <a href="mailto:darleneriveral@icloud.com" className={styles.link}>Email</a>
          <span className={styles.sep}>,</span>
          <a href="https://linkedin.com/in/darleneelzbethriveral" target="_blank" rel="noopener noreferrer" className={styles.link}>Linkedin</a>
          <span className={styles.sep}>,</span>
          <a href="https://instagram.com/pixeldais" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
        </p>
      </div>
    </section>
  )
}
