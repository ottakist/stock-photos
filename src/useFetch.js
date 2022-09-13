import React, { useEffect, useState } from 'react';

export const useFetch = (url,page) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // console.log(page);
  const getData = async () => {
   setLoading(true)
   try {
    
    const response = await fetch(`${url}&page=${page}`);
    const data = await response.json();
    setLoading(false);
    setData((oldPhotos)=>{return[...oldPhotos,...data]});
   } catch (error) {
    setLoading(false)
    console.log(error)
   }
  };
  useEffect(() => {
    getData();
  }, [page]);
  return { loading, data };
};
