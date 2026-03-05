import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import avatar from '../assets/avatar.jpg'

const DARK_HERO_ROUTES = ['/landscape-airbnb-on-ios']

export default function Navbar() {
  const { pathname } = useLocation()
  const isDark = DARK_HERO_ROUTES.includes(pathname)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isDark ? styles.lightText : ''}`}>
        {pathname === '/' ? (
          <Link to="/" className={styles.logo} aria-label="Home">
            <div className={styles.avatar}>
              <img src={avatar} alt="Darlene" className={styles.avatarImg} />
            </div>
          </Link>
        ) : (
          <Link to="/" className={styles.link}>Home</Link>
        )}
        <div className={styles.links}>
          <Link to="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
          <Link to="/work-with-me" className={`${styles.linkBlue} ${pathname === '/work-with-me' ? styles.active : ''}`}>Work with me</Link>
        </div>
      </nav>
    </header>
  )
}
