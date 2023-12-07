// MusicsTab.js
import React from 'react';
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

const MusicsTab = () => {
  return (
    <div>
      {/* Contenu pour l'onglet Musiques */}
      <h2>Musiques</h2>
      <ItemsList items={itemsData} />
    </div>
  );
};

export default MusicsTab;
