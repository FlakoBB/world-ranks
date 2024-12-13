import { useEffect, useState } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import styles from '@/styles/countriesList.module.scss'

const CountriesList = ({ countries = [], sortBy }) => {
  const countriesPerPage = 30
  const lastPage = Math.ceil(countries.length / countriesPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCountries, setCurrentCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const router = useTransitionRouter()

  const sortList = () => {
    switch (sortBy) {
      case 'population':
        return countries.sort((a, b) => b.population - a.population)
      case 'area':
        return countries.sort((a, b) => b.area - a.area)
      case 'name':
        return countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
      default:
        return countries.sort((a, b) => b.population - a.population)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    const countriesSorted = sortList()
    const startIndex = (currentPage - 1) * countriesPerPage
    const endIndex = startIndex + countriesPerPage
    setCurrentCountries([...countriesSorted.slice(startIndex, endIndex)])
    setIsLoading(false)
  }, [currentPage, countries, sortBy])

  const prevPage = () => {
    setCurrentPage(prev => {
      if (prev > 1) {
        return prev - 1
      } else {
        return prev
      }
    })
  }

  const nextPage = () => {
    setCurrentPage(prev => {
      if (prev < lastPage) {
        return prev + 1
      } else {
        return prev
      }
    })
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km<sup>2</sup>)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading
              ? (
                  Array.from({ length: countriesPerPage }).map((_, index) => (
                    <tr key={index} className={styles.loading}>
                      <td><figure className={styles.flag_image} /></td>
                      <td><p className={styles.text} /></td>
                      <td><p className={styles.text} /></td>
                      <td><p className={styles.text} /></td>
                      <td><p className={styles.text} /></td>
                    </tr>
                  ))
                )
              : (
                  currentCountries?.map((country, index) => (
                    <tr key={index} onClick={() => router.push('/country')}>
                      <td>
                        <figure className={styles.flag_image}>
                          <img src={country.flags.svg} alt='country flag' />
                        </figure>
                      </td>
                      <td>
                        <p className={styles.text}>{country.name.common}</p>
                      </td>
                      <td>
                        <p className={styles.text}>{country.population.toLocaleString('en-US')}</p>
                      </td>
                      <td>
                        <p className={styles.text}>{country.area.toLocaleString('en-US')}</p>
                      </td>
                      <td>
                        <p className={styles.text}>{country.region}</p>
                      </td>
                    </tr>
                  ))
                )
          }
        </tbody>
      </table>
      <div className={styles.pagination_bar}>
        <button className={styles.previous_btn} onClick={prevPage}>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M12 6L8 10L4 6' stroke='#6C727F' strokeWidth='2' />
          </svg>
        </button>
        <ul className={styles.pages_list}>
          {
            Array.from({ length: Math.ceil(countries.length / countriesPerPage) }).map((_, index) => (
              <li key={index}>
                <button className={`${styles.page_btn} ${currentPage === index + 1 && styles.current}`} onClick={() => goToPage(index + 1)}>{index + 1}</button>
              </li>
            ))
          }
        </ul>
        <button className={styles.next_btn} onClick={nextPage}>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M12 6L8 10L4 6' stroke='#6C727F' strokeWidth='2' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CountriesList
