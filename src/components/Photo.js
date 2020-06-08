import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Photo() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await response.json();
      setPhoto(data);
    }
  }, []);

  if(!photo) {
    return <div/>;
  }

  return(
    <div className="main">

        <div className="photo-container">
          <img
            src={photo.url}
            alt={photo.title}
            className="photo"
          />

          
        </div>

        <div className='side'>

          <div className="title">
            <h1>{photo.title}</h1>
            <p className="copyright">© {photo.copyright}</p>
            <p className="date">{photo.date}</p>
          </div>

          <div className="text">          
            <p className="description">{photo.explanation}</p>
          </div>
          
        </div>

    </div>
  );
}