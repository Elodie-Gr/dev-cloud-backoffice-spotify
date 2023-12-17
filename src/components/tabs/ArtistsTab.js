// ArtistsTab.js
import React, {useState} from 'react';
import {ItemsList} from '../ItemsList';

const itemsData = [
  {
    artist: 'Artist 1',
    songTitle: 'Song Title 1',
    albumTitle: 'Album Title 1',
    imageSrc: 'album-cover1.jpg',
  },
  {
    artist: 'Artist 2',
    songTitle: 'Song Title 2',
    albumTitle: 'Album Title 2',
    imageSrc: 'album-cover2.jpg',
  },
  {
    artist: 'Artist 3',
    songTitle: 'Song Title 3',
    albumTitle: 'Album Title 3',
    imageSrc: 'album-cover3.jpg',
  },
];

const ArtistsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  return (
    <div>
      {/* Contenu pour l'onglet Musiques */}
      <h2>Artistes</h2>
      <ItemsList
        items={itemsData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default ArtistsTab;
