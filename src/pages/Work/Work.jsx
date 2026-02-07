import { useState, useCallback } from 'react'
import styles from './Work.module.css'

const PROJECTS = [
  {
    id: 'mothers-mays',
    title: "Mother May's",
    role: 'Mother May',
    year: '2023',
    description:
      'A gritty, soulful, commanding performance as the lead character Mother May.',
    cover: '/assets/website/MMs/m1.jpg',
    gallery: [
      '/assets/website/MMs/m2.jpg',
      '/assets/website/MMs/sqaure/DSCF0309.jpg',
      '/assets/website/MMs/sqaure/DSCF0258 2.jpg',
    ],
  },
  {
    id: 'heathers',
    title: 'Heathers',
    role: 'Heather Chandler',
    year: '2023',
    description:
      'Confident, commanding, regal presence as the iconic Heather Chandler.',
    cover: '/assets/website/heathers/h1.jpg',
    gallery: [
      '/assets/website/heathers/h2.jpg',
      '/assets/website/heathers/h3.jpg',
      '/assets/website/heathers/h4.jpg',
      '/assets/website/heathers/h5.jpg',
      '/assets/website/heathers/ss/3U8A6779.jpg',
      '/assets/website/heathers/ss/3U8A6790.jpg',
      '/assets/website/heathers/ss/3U8A6801.jpg',
      '/assets/website/heathers/ss/3U8A7087.jpg',
      '/assets/website/heathers/ss/3U8A7443.jpg',
      '/assets/website/heathers/ss/3U8A7711.jpg',
      '/assets/website/heathers/ss/3U8A7921.jpg',
      '/assets/website/heathers/ss/3U8A7971.jpg',
    ],
  },
  {
    id: 'wwry',
    title: 'We Will Rock You',
    role: 'U.S. Killer Queen',
    year: '2022',
    description: 'Vocal versatility, stage dominance and intricate harmonisation.',
    cover: '/assets/website/wwry/w1.jpg',
    gallery: [
      '/assets/website/wwry/w2.jpg',
      '/assets/website/wwry/WWRY-43.jpg',
      '/assets/website/wwry/WWRY-166.jpg',
      '/assets/website/wwry/WWRY-166 2.jpg',
      '/assets/website/wwry/WWRY-166 3.jpg',
    ],
  },
  {
    id: 'recordings',
    title: 'Recordings',
    role: '',
    year: '',
    description: 'Coming soon.',
    cover: null,
    gallery: [],
  },
]

export default function Work() {
  const [expanded, setExpanded] = useState(null)
  const [galleryReady, setGalleryReady] = useState(null)

  const handleExpand = useCallback((id) => {
    setGalleryReady(null)
    setExpanded(id)
    // Mount gallery AFTER column animation finishes
    setTimeout(() => setGalleryReady(id), 700)
  }, [])

  const handleCollapse = useCallback(() => {
    setGalleryReady(null)
    setExpanded(null)
  }, [])

  return (
    <section className={styles.work}>
      {PROJECTS.map(({ id, title, role, year, description, cover, gallery }) => {
        const isExpanded = expanded === id
        const isCollapsed = expanded !== null && !isExpanded
        const isReady = galleryReady === id

        return (
          <div
            key={id}
            className={[
              styles.column,
              isExpanded ? styles.expanded : '',
              isCollapsed ? styles.collapsed : '',
            ].join(' ')}
            onClick={() => !isExpanded && handleExpand(id)}
          >
            {/* Close button — sticky, stays visible while scrolling */}
            {isExpanded && (
              <div className={styles.closeWrap}>
                <button
                  className={styles.close}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCollapse()
                  }}
                  aria-label="Close project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            {/* Cover image — always present, never doubles */}
            <div className={styles.coverSection}>
              {cover ? (
                <img src={cover} alt="" className={styles.coverImg} />
              ) : (
                <div className={styles.coverFallback} />
              )}
              <div className={styles.coverGrad} />

              <div
                className={styles.info}
                style={{ opacity: isCollapsed ? 0.4 : 1 }}
              >
                <h2 className={styles.title}>{title}</h2>
                {role && <p className={styles.role}>{role}</p>}
                {isExpanded && year && (
                  <span className={styles.year}>{year}</span>
                )}
                {isExpanded && description && (
                  <p className={styles.description}>{description}</p>
                )}
              </div>
            </div>

            {/* Gallery — mounts below cover after animation */}
            {isReady && gallery.length > 0 && (
              <div className={styles.gallery}>
                {gallery.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${title} ${i + 2}`}
                    className={styles.galleryImage}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
