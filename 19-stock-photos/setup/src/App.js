import React, { useState, useEffect, useRef } from 'react'
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
  const [query, setQuery] = useState('')
  const [newPhotos, setNewPhotos] = useState(false)
  const mounted = useRef(false)
  const fetchPhotos = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const photos = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return photos.results
        } else if (query) {
          return [...oldPhotos, ...photos.results]
        } else {
          return [...oldPhotos, ...photos]
        }
      })
      setNewPhotos(false)
      setLoading(false)
    } catch (error) {
      setNewPhotos(false)
      setLoading(false)
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (page === 1) {
      fetchPhotos()
      return
    }
    setPage(1)
  }
  useEffect(() => {
    fetchPhotos()
  }, [page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newPhotos) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
  }, [newPhotos])
  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
      setNewPhotos(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  }, [])

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search'
            className='form-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading....</h2>}
      </section>
    </main>
  )
}

export default App
