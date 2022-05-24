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
  const fetchPhotos = async () => {
    setLoading(true)
    let url
    url = `${mainUrl}${clientID}`
    console.log(url)
    try {
      const response = await fetch(url)
      const photos = await response.json()
      console.log(photos)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPhotos()
  }, [])
  return <h2>stock photos starter</h2>
}

export default App
