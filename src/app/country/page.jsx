'use client'

import styles from '@/styles/country/coutryPage.module.scss'
import { useTransitionRouter } from 'next-view-transitions'

const CountryPage = () => {
  const router = useTransitionRouter()

  return (
    <main className={styles.main}>
      <figure className={styles.flag_image}>
        <img src='/hero-image-wr.jpg' alt='country flag' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </figure>
      <p>Country Name</p>
      <button onClick={() => router.push('/')}>Back</button>
    </main>
  )
}
export default CountryPage
