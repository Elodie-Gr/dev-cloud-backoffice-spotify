// ArtistsTab.js
import React, {useState, useEffect} from 'react';
import {ItemsList} from '../ArtistsList';
import {fetchArtists} from '../../services/api/artistApi';

const ArtistsTab = () => {
  const [artists, setArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const artists = await fetchArtists();
        setArtists(artists);
        console.log(artists);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Artistes</h2>
      <ItemsList
        items={artists}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtistsTab;
