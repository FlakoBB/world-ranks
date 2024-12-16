'use client'

import { useEffect, useState } from 'react'
import { get } from '@/services/countries'
import CountriesList from '@/components/countriesList'
import styles from '@/styles/mainPage.module.scss'
import CheckboxButton from '@/components/CheckboxButton'

export default function Home () {
  const [countries, setCountries] = useState([])
  const [countriesFound, setCountriesFound] = useState(0)
  const [sortCountriesBy, setSortCountriesBy] = useState('population')

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
          <aside className={styles.menu}>
            <div className={styles.field}>
              <label htmlFor='sortSelect' className={styles.field_label}>Sort By</label>
              <select id='sortSelect' className={styles.select_input} value={sortCountriesBy} onChange={(e) => setSortCountriesBy(e.target.value)}>
                <option value='population'>Population</option>
                <option value='area'>Area</option>
                <option value='name'>Name</option>
              </select>
            </div>
            <div className={styles.field}>
              <span className={styles.field_label}>Region</span>
              <div className={styles.checkbox_container}>
                <CheckboxButton label='Americas' />
                <CheckboxButton label='Antartic' isChecked />
                <CheckboxButton label='africa' />
                <CheckboxButton label='asia' />
                <CheckboxButton label='Europe' isChecked />
                <CheckboxButton label='oceania' />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.field_label}>Status</label>
            </div>
          </aside>
          <section>
            <CountriesList countries={countries} sortBy={sortCountriesBy} />
          </section>
        </div>
      </div>
    </main>
  )
}
