import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const fetchPhotos = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    url = `${mainUrl}${clientID}${urlPage}`
    try {
      const response = await fetch(url)
      const photos = await response.json()
      setPhotos((oldPhotos) => [...oldPhotos, ...photos])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }
  useEffect(() => {
    fetchPhotos()
  }, [page])
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5
      ) {
        setPage((oldPage) => oldPage + 1)
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='Search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo, index) => {
            return <Photo key={photo.id} {...photo} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading....</h2>}
      </section>
    </main>
  )
}

export default App
