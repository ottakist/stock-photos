import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useFetch } from './useFetch';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
// const pixabay(`https://pixabay.com/api/?key=28343049-d212888c474dea82932fe7020&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNum}&per_page=40`).

const mainUrl = `https://api.unsplash.com/photos/${clientID}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [query, setQuery] = useState('');
  const urlQuery = `&query=${query}`;
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState([]);

  // const { loading, data } = useFetch(
  //   `${searchUrl}${clientID}${urlQuery}`,
  //   page
  
     let queryUrl = `${searchUrl}${clientID}${urlQuery}`;
    
  
  
    let preloadUrl = mainUrl;
    
  
  const { loading, data } = useFetch(query?queryUrl:preloadUrl, page);
  useEffect(() => {
    setPhoto({ data });
    console.log(photo);
  }, []);
  // console.log(data)
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage(page + 1);
        console.log(typeof page, page);
      }
    });
    return () => {
      window.removeEventListener('scroll', event);
    };
  }, [page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      
    }
    setPage(1);
  };

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            className='form-input'
            placeholder='Search'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className='submit-btn' type='submit' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {data.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
