import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import SocialBar from '../SocialBar/SocialBar'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()
  const theme = 'dark'
  const isHome = pathname === '/'

  return (
    <div className={styles.layout} data-theme={theme}>
      {!isHome && <Header />}
      <main key={pathname} className={styles.main}>
        <Outlet />
      </main>
      <SocialBar />
    </div>
  )
}
