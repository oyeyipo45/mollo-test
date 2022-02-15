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
  const [show, setShow] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    console.log("working", "dfdfdd")
    //setOpen(true)
  }

  const search = async (e) => {
    e.preventDefault()
    console.log(keyword, "searchng")
  //   setLoading(true);
    if (keyword === '') {
      alert('Please enter something to search')
    }
   try {
     const { data } = await axios.get(`${publicUrl}/search/photos/?client_id=${key}&query=${keyword}&per_page=7`);
     
     console.log(data, 'searching');
     setImages(data.results);
     setLoading(false)
      
   } catch (error) {
     console.log(error)
   }
  }

  const getImages = async () => {

   
   try {
      const { data } = await axios.get(`${publicUrl}/search/photos/?client_id=${key}&query=african&per_page=7`);

     setImages(data.results)
     setLoading(false)
      console.log(data, 'images');
   } catch (error) {
     console.log(error)
   }

  }

  useEffect(() => {
    setLoading(true)
    getImages()

  }, [])

 

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <form className='input'>
            <button className='input_submit' onClick={(e) => search(e)} type='submit'>
              <img src={searchIcon} alt='search icon' />
            </button>
            <input onChange={(e) => setKeyword(e.target.value)} type='input' placeholder='Search for photo' className='input__box' />
          </form>
        </header>

        <section className=''>
          <div className='grid-container'>
            {loading && <Loader />}
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
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
