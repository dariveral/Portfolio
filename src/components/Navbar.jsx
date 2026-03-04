import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/#work',    label: 'Work' },
  { to: '/#about',   label: 'About' },
  { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isSubPage = pathname !== '/'

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>Darlene Rivera<span className={styles.dot}>l</span></Link>
        <div className={styles.links}>
          {isSubPage
            ? <Link to="/" className={styles.back}>← Back</Link>
            : links.map(l => (
                <a key={l.to} href={l.to} className={styles.link}>{l.label}</a>
              ))
          }
        </div>
      </nav>
    </header>
  )
}
