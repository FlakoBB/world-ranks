import { useEffect, useState } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import styles from '@/styles/countriesList.module.scss'

const CountriesList = ({ countries = [] }) => {
  // const [countriesPerPage, setCountriesPerPage] = useState(30)
  const countriesPerPage = 30
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState((currentPage - 1) * countriesPerPage)
  const [endIndex, setEndIndex] = useState(startIndex + countriesPerPage)
  const [currentCountries, setCurrentCountries] = useState([...countries.slice(startIndex, endIndex)])

  const router = useTransitionRouter()

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * countriesPerPage
    const newEndIndex = newStartIndex + countriesPerPage
    setStartIndex(newStartIndex)
    setEndIndex(newEndIndex)
    setCurrentCountries([...countries.slice(newStartIndex, newEndIndex)])
  }, [currentPage])

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
      if (prev < Math.ceil(countries.length / countriesPerPage)) {
        return prev + 1
      } else {
        return prev
      }
    })
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km2)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {
            currentCountries?.map((country, index) => (
              <tr key={index} onClick={() => router.push('/country')}>
                <td>
                  <figure className={styles.flag_image}>
                    <img src={country.flags.svg} alt='country flag' />
                  </figure>
                </td>
                <td className={styles.text}>{country.name.common}</td>
                <td className={styles.text}>{country.population}</td>
                <td className={styles.text}>{country.area}</td>
                <td className={styles.text}>{country.region}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>previous</button>
        <p>{currentPage}</p>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  )
}

export default CountriesList
