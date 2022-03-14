import React, { useState, useEffect } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Tours from './components/Tours'
import Button from './styles/Button'
import Spinner from './assets/images/Spinner.svg'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const filterTours = (id) => {
    setTours((oldTours) => {
      return oldTours.filter((singleTour) => singleTour.id !== id)
    })
  }
  const getTours = async () => {
    setIsLoading(true)
    const response = await fetch('https://course-api.com/react-tours-project')
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json()
      setTours(data)
      setIsLoading(false)
      return
    }
    throw new Error('No data is Available')
  }
  useEffect(() => {
    getTours()
  }, [])
  return (
    <>
      <GlobalStyles />
      <h1>our tours</h1>
      <div className='underline'></div>
      {isLoading && <img src={Spinner} className='loading' alt='Spinner Gif' />}
      {tours.length > 0 && <Tours data={tours} filterTours={filterTours} />}
      {!isLoading && tours.length == 0 && (
        <>
          <h1>No Tours Available</h1>
          <Button primary onClick={getTours}>
            show all
          </Button>
        </>
      )}
    </>
  )
}

export default App
