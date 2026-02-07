import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.heading}>Let's Be Social</h1>
      <a href="mailto:akravtsova3@gmail.com" className={styles.email}>
        akravtsova3@gmail.com
      </a>
      <div className={styles.links}>
        <a
          href="https://instagram.com/annakrav_"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com/in/annakravtsova"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LinkedIn
        </a>
      </div>
      <p className={styles.location}>Sydney, Australia</p>
    </section>
  )
}
