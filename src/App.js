import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ImageCard from './ImageCard'
import loadingGif from './space-loading.gif'
import {Button} from '@shopify/polaris'


function App() {
  const [page, setPage] = useState(1)
  const [nasaPictures, setNasaPictures] = useState([])
  const [isLoading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const loadMoreImages = () => {
    setPage(page +1)
  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5&thumbs=true`)
    .then(res => res.json())
    .then(data => {
      setNasaPictures(data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [page])

  return (
    <>
      {isLoading && <img src={loadingGif} className='loader' alt="loading"/>}
      <ImageCard props={nasaPictures} />
      <Button onClick={() => loadMoreImages()}> Load More Images</Button>
    </>
  )
}

export default App;
