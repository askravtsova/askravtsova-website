import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

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
        <Link to="/about" className={styles.sideLink}>/about</Link>
        <Link to="/work" className={styles.sideLink}>/work</Link>
        <Link to="/contact" className={styles.sideLink}>/contact</Link>
      </nav>
    </section>
  )
}
