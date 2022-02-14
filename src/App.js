import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import searchIcon from './attributes/magnifying-glass.png';

const publicUrl = process.env.REACT_APP_UNSPLASH_HOME_URL;
const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const App = () => {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const search = async (e) => {
    e.preventDefault()
    console.log(keyword, "searchng")
  //   setLoading(true);

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
      const { data } = await axios.get(`${publicUrl}/photos/?client_id=${key}&per_page=8`);

     setImages(data)
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
      {loading && <p>loading .... </p>}
      <div className='App'>
        <header className='App-header'>
          <form className='input'>
            <button className='input_submit' onClick={(e) => search(e)} type='submit'>
              <img src={searchIcon} />
            </button>
            <input onChange={(e) => setKeyword(e.target.value)} type='input' placeholder='Enter a task' className='input__box' />
          </form>
        </header>
        <section className=''>
          <div className='grid-container'>
            {images.map((image) => (
              <p key={image.id} className='grid-item'>
                <img src={image.urls.thumb} />
              </p>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
