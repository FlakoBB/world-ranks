const baseURL = 'https://restcountries.com/v3.1'

export const get = {
  allCountries: async () => {
    try {
      const response = await fetch(`${baseURL}/all`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting country list:', error)
      return null
    }
  },
  countryByName: async (countryName) => {
    try {
      const response = await fetch(`${baseURL}/name/${countryName}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting country data:', error)
      return null
    }
  },
  countriesByRegion: async (region) => {
    try {
      const response = await fetch(`${baseURL}/region/${region}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting country list by region:', error)
      return null
    }
  },
  independentCountries: async () => {
    try {
      const response = await fetch(`${baseURL}/independent?status=true`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting independent countries:', error)
      return null
    }
  }
}
