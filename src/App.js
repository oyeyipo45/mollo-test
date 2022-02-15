import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import searchIcon from './attributes/magnifying-glass.png';
import Loader from './components/Loader';
import Modal from './components/Modal';

const publicUrl = process.env.REACT_APP_UNSPLASH_HOME_URL;
const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const App = () => {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');
  const [resultHeader, setResultHeader] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
  }

  const search = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (keyword === '') {
      setMessage('please enter a keyword in the search box to search with')
      setLoading(false);
    } else {
      try {
        const { data } = await axios.get(`${publicUrl}/search/photos/?client_id=${key}&query=${keyword}&per_page=8`);

        if (data.results.length === 0) {
          setMessage('No result found for entered search');
          setLoading(false);
        } else {
            console.log(data, 'searching');
            setImages(data.results);
            setResultHeader(`Search results for "${keyword}"`);
            setLoading(false);
        }
        
      } catch (error) {
        setError(error)
        setLoading(false);
        
      }
    }
  }

  const getImages = async () => {
   try {
      const { data } = await axios.get(`${publicUrl}/search/photos/?client_id=${key}&query=african&per_page=8`);

     setImages(data.results)
     setLoading(false)
   } catch (error) {
     setError(error);
     setLoading(false);
   }

  }


  const searchAgain = () => {
    window.location.reload(false);
  }

  useEffect(() => {
    setLoading(true)
    getImages()

  }, [])

 

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          {resultHeader ? (
            <>
              <h2 className='result-header'>{resultHeader}</h2> <button className='searchAgain' onClick={(e) => searchAgain(e)}>search again</button>{' '}
            </>
          ) : (
            <form className='input'>
              <button className='input_submit' onClick={(e) => search(e)} type='submit'>
                <img src={searchIcon} alt='search icon' />
              </button>
              <input onChange={(e) => setKeyword(e.target.value)} type='input' placeholder='Search for photo' className='input__box' />
            </form>
          )}
        </header>

        <section className='section-images'>
          <div className='grid-container'>
            {loading ? (
              <Loader />
            ) : error ? (
              <h2 className='empty-result'>An errror occured please try to search or reload page again</h2>
            ) : message ? (
              <h2 className='empty-result'>{message}</h2>
            ) : (
              <>
                {images.map((image) => (
                  <div className='grid-item'>
                    <div key={image.id}>
                      <img src={image.urls.thumb} className='image-container' alt='unsplash images' />
                    </div>
                    <div className='user-details'>
                      <span class='name-span'>{image.user.name}</span>
                      <span class='location-span'>{image.user.location}</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
