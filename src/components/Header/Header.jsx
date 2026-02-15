import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useScrollCollapse from '../../hooks/useScrollCollapse'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [navRevealed, setNavRevealed] = useState(false)
  const isCollapsed = useScrollCollapse()
  const location = useLocation()

  // Reset revealed state when scrolling back to top
  useEffect(() => {
    if (!isCollapsed) setNavRevealed(false)
  }, [isCollapsed])

  return (
    <header
      className={`${styles.header} ${isCollapsed ? styles.collapsed : ''} ${navRevealed ? styles.revealed : ''}`}
    >
      <div className={styles.headerInner}>
        <Link to="/" className={styles.wordmark}>
          Anna Kravtsova
        </Link>

        <button
          className={styles.expandToggle}
          onClick={() => setNavRevealed(prev => !prev)}
          aria-label={navRevealed ? 'Close navigation' : 'Open navigation'}
        >
          <span className={`${styles.expandBar} ${navRevealed ? styles.expandOpen : ''}`} />
          <span className={`${styles.expandBar} ${navRevealed ? styles.expandOpen : ''}`} />
        </button>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.link} ${location.pathname === to ? styles.active : ''}`}
              onClick={() => {
                setIsOpen(false)
                setNavRevealed(false)
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile hamburger — outside headerInner */}
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
      </button>

      <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
        {NAV_ITEMS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`${styles.mobileLink} ${location.pathname === to ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
