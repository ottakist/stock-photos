import React, { useEffect, useState } from 'react';

const Photo = (info) => {

  const { regular: image } = info.urls;
  const {
    likes,
    alt_description,
    user: {
      name,
      portfolio_url,
      profile_image: { medium },
    },
  } = info;
  

  return (
    <article className='photo'>
      <img src={image} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className='user-img' />
        </a>
      </div>
    </article>
  );
};

export default Photo;
