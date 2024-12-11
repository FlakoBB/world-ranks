'use client'

import { useEffect, useState } from 'react'
import { get } from '@/services/countries'
import CountriesList from '@/components/countriesList'
import styles from '@/styles/mainPage.module.scss'

export default function Home () {
  const [countries, setCountries] = useState([])
  const [countriesFound, setCountriesFound] = useState(0)

  const fetchCountries = async () => {
    const response = await get.allCountries()
    if (response) {
      setCountries(response)
      setCountriesFound(response.length)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <img src='/Logo.svg' alt='World Ranks logo' />
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.countries_found}>Found {countriesFound} countries</p>
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
