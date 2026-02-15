import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const NAV_LINKS = [
  { to: '/about', label: '/about' },
  { to: '/work', label: '/work' },
  { to: '/contact', label: '/contact' },
]

export default function Home() {
  const [split, setSplit] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSplit(true), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay} />

      <h1 className={`${styles.name} ${styles.anna} ${split ? styles.split : ''}`}>
        Anna
      </h1>
      <h1 className={`${styles.name} ${styles.kravtsova} ${split ? styles.split : ''}`}>
        Kravtsova
      </h1>

      <nav className={`${styles.sideNav} ${split ? styles.navVisible : ''}`}>
        <span className={styles.navRule} />
        {NAV_LINKS.map(({ to, label }, index) => (
          <Link
            key={to}
            to={to}
            className={`${styles.sideLink} ${split ? styles.sideLinkVisible : ''}`}
            style={{ '--i': index }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
