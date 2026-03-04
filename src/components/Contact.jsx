import styles from './Contact.module.css'

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/dariveral',         handle: '@darleneriveral' },
  { label: 'Instagram', href: 'https://instagram.com/pixeldais',       handle: '@darleneriveral' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/darleneelzbethriveral',     handle: 'darleneriveral' },
]

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.label}>Contact</span>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Let's work together</h2>
            <p className={styles.sub}>
              Open to design roles, freelance projects, and interesting conversations.
            </p>
            <a href="mailto:hello@darleneriveral.com" className={styles.email}>
              hello@darleneriveral.com
            </a>
          </div>
          <div className={styles.socials}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialRow}>
                <span className={styles.socialLabel}>{s.label}</span>
                <span className={styles.socialHandle}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
