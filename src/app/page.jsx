'use client'

import CountriesList from '@/components/countriesList'
import styles from '@/styles/mainPage.module.scss'

export default function Home () {
  const countries = [
    {
      flag: '/Logo.svg',
      name: 'country 1',
      pupulation: '100,000',
      area: '5,000,000',
      region: 'Americas'
    },
    {
      flag: '/Logo.svg',
      name: 'country 2',
      pupulation: '100,000',
      area: '5,000,000',
      region: 'Americas'
    },
    {
      flag: '/Logo.svg',
      name: 'country 3',
      pupulation: '100,000',
      area: '5,000,000',
      region: 'Americas'
    },
    {
      flag: '/Logo.svg',
      name: 'country h',
      pupulation: '100,000',
      area: '5,000,000',
      region: 'Americas'
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <img src='/Logo.svg' alt='World Ranks logo' />
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.countries_found}>Found 234 countries</p>
          <div className={styles.search_bar}>
            <button>
              <img src='/Search.svg' alt='Magnifying glass icon' />
            </button>
            <input type='search' name='search' id='search' placeholder='Search by Name, Region, Subregion' />
          </div>
        </header>
        <div className={styles.list_container}>
          <aside>aside</aside>
          <section>
            <CountriesList countries={countries} />
          </section>
        </div>
      </div>
    </main>
  )
}
