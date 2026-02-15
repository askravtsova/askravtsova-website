import { useEffect, useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const extendedRef = useRef(null)

  useEffect(() => {
    const el = extendedRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const items = el.querySelectorAll('[data-reveal]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about}>
      {/* ── First fold: fits viewport ── */}
      <div className={styles.fold}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.photoWrap}>
              <img
                src="/assets/website/heathers/h1.jpg"
                alt=""
                className={styles.photo}
              />
              <div className={styles.photoOverlay} />
            </div>
            <h1 className={styles.heading}>About</h1>
          </div>
          <div className={styles.right}>
            <p className={styles.lead}>
              Experienced performing artist with over seven years in singing,
              dancing, acting, and public speaking.
            </p>
            <p className={styles.body}>
              Known for a commanding and self-assured stage presence with an
              intelligent and humorous charm. Performances marked by vocal
              strength, emotional depth, and a unique ability to connect with
              diverse audiences.
            </p>
            <div className={styles.meta}>
              <span>Warm, Colaratura</span>
              <span>Vocal Range: C#3 — C#6</span>
              <span>Sydney, Australia</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
        </div>
      </div>

      {/* ── Below the fold: scroll to discover ── */}
      <div className={styles.extended} ref={extendedRef}>
        {/* Experience */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle} data-reveal>Experience</h2>
          <div className={styles.entries}>
            <div className={styles.entry} data-reveal>
              <span className={styles.entryYear}>2023</span>
              <div>
                <h3 className={styles.entryTitle}>Mother May's</h3>
                <p className={styles.entryRole}>Lead Role — Mother May</p>
                <p className={styles.entryDetail}>
                  Gritty, soulful and commanding lead role showcasing strong
                  vocal and dramatic depth with improvisation in comedic timing
                  and heavy audience interaction.
                </p>
                <span className={styles.entryCompany}>MTS, University of NSW</span>
              </div>
            </div>

            <div className={styles.entry} data-reveal>
              <span className={styles.entryYear}>2023</span>
              <div>
                <h3 className={styles.entryTitle}>Heathers</h3>
                <p className={styles.entryRole}>Heather Chandler</p>
                <p className={styles.entryDetail}>
                  Confident blend of commanding and regal presence with nuanced
                  character portrayal. 2-month run.
                </p>
                <span className={styles.entryCompany}>Campbelltown Theatre Group</span>
              </div>
            </div>

            <div className={styles.entry} data-reveal>
              <span className={styles.entryYear}>2022</span>
              <div>
                <h3 className={styles.entryTitle}>We Will Rock You</h3>
                <p className={styles.entryRole}>U.S. Killer Queen</p>
                <p className={styles.entryDetail}>
                  Vocal versatility, stage dominance and intricate harmonisation.
                </p>
                <span className={styles.entryCompany}>MUSE, University of Sydney</span>
              </div>
            </div>

            <div className={styles.entry} data-reveal>
              <span className={styles.entryYear}>2020 — Present</span>
              <div>
                <h3 className={styles.entryTitle}>Event Singer</h3>
                <p className={styles.entryDetail}>
                  Weekly paid performances at venues and functions — concerts,
                  weddings, receptions, cabarets. Pop, Blues, Jazz, RnB and Rock.
                </p>
              </div>
            </div>

            <div className={styles.entry} data-reveal>
              <span className={styles.entryYear}>2019 — Present</span>
              <div>
                <h3 className={styles.entryTitle}>Lead Vocal Coach</h3>
                <p className={styles.entryDetail}>
                  Training in vocal techniques, emphasising performance skills
                  and stage presence.
                </p>
                <span className={styles.entryCompany}>Griffiths Music School</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Training */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle} data-reveal>Skills &amp; Training</h2>
          <div className={styles.skills}>
            <div className={styles.skill} data-reveal>
              <h3 className={styles.skillLabel}>Dance</h3>
              <p className={styles.skillDetail}>
                Ballroom, Belly Dancing, Ballet, Contemporary
              </p>
            </div>
            <div className={styles.skill} data-reveal>
              <h3 className={styles.skillLabel}>Languages</h3>
              <p className={styles.skillDetail}>
                English, Ukrainian, Russian
              </p>
            </div>
            <div className={styles.skill} data-reveal>
              <h3 className={styles.skillLabel}>Instruments</h3>
              <p className={styles.skillDetail}>Violin, Piano</p>
            </div>
            <div className={styles.skill} data-reveal>
              <h3 className={styles.skillLabel}>Other</h3>
              <p className={styles.skillDetail}>
                Competitive Synchronized Swimming, Public Speaking
              </p>
            </div>
          </div>
        </div>

        {/* Resume download */}
        <div className={styles.resumeSection} data-reveal>
          <a
            href="/assets/creative-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
