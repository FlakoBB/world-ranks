import { useTransitionRouter } from 'next-view-transitions'
import styles from '@/styles/countriesList.module.scss'

const CountriesList = ({ countries = [] }) => {
  const router = useTransitionRouter()
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
            countries.map((country, index) => (
              <tr key={index} onClick={() => router.push('/country')}>
                <td>
                  <figure className={styles.flag_image}>
                    <img src={country.flag} alt='country flag' />
                  </figure>
                </td>
                <td className={styles.text}>{country.name}</td>
                <td className={styles.text}>{country.pupulation}</td>
                <td className={styles.text}>{country.area}</td>
                <td className={styles.text}>{country.region}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CountriesList
