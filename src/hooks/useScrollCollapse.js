import { useState, useEffect } from 'react'

const THRESHOLD = 80

export default function useScrollCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 769px)')
    if (!mql.matches) return

    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const collapsed = window.scrollY > THRESHOLD
        setIsCollapsed(prev => (prev !== collapsed ? collapsed : prev))
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isCollapsed
}
