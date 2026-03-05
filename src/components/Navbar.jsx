import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import avatar from '../assets/avatar.jpg'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} aria-label="Home">
          <div className={styles.avatar}>
            <img src={avatar} alt="Darlene" className={styles.avatarImg} />
          </div>
        </Link>
        <div className={styles.links}>
          <Link to="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
          <Link to="/work-with-me" className={`${styles.linkBlue} ${pathname === '/work-with-me' ? styles.active : ''}`}>Work with me</Link>
        </div>
      </nav>
    </header>
  )
}
