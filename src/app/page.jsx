import styles from '@/styles/mainPage.module.scss'

export default function Home () {
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
      </div>
    </main>
  )
}
