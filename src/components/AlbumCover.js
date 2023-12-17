import React, {useState, useEffect} from 'react';

const AlbumCover = ({albumId}) => {
  const [albumCover, setAlbumCover] = useState('');

  useEffect(() => {
    // Make a request to your backend to fetch the album cover data
    fetch(`http://localhost:5000/api/v1/album/cover/${albumId}`)
      .then(response => response.text())
      .then(data => setAlbumCover(data))
      .catch(error => console.error('Error fetching album cover:', error));
  }, [albumId]);

  return (
    <div>
      {albumCover && <img src={albumCover} alt="Album Cover" />}
      {!albumCover && <p>No album cover available</p>}
    </div>
  );
};

export default AlbumCover;
