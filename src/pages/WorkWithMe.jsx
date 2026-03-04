import styles from './WorkWithMe.module.css'

export default function WorkWithMe() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Work with me</p>
        <h1 className={styles.heading}>
          Let's build something together.
        </h1>
        <p className={styles.sub}>
          I'm open to full-time roles, freelance projects, and collaborations.
          If you have something interesting in mind, I'd love to hear about it.
        </p>
        <a href="mailto:darleneriveral@icloud.com" className={styles.cta}>
          darleneriveral@icloud.com
        </a>
      </div>
    </div>
  )
}
