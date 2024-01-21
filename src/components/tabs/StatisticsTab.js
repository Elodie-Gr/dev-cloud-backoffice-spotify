// StatisticsTab.js
import React, {useEffect, useState} from 'react';
import {countSongs, countTotalListens} from '../../services/api/songApi';
import {countAlbums} from '../../services/api/albumApi';

const StatisticsTab = () => {
  const [songCount, setSongCount] = useState(0);
  const [albumCount, setAlbumCount] = useState(0);
  const [totalListens, setTotalListens] = useState(0);

  useEffect(() => {
    countSongs()
      .then(response => setSongCount(response.songCount))
      .catch(error => console.error('Error fetching song count:', error));
    countAlbums()
      .then(response => setAlbumCount(response.albumCount))
      .catch(error => console.error('Error fetching album count:', error));
    countTotalListens()
      .then(response => setTotalListens(response.totalListens))
      .catch(error => console.error('Error fetching total listens:', error));
  });

  return (
    <div>
      <h2>Statistiques</h2>
      <ul>
        <li>Nombre de morceau sur la plateforme : {songCount}</li>
        <li>Nombre d'album sur la plateforme : {albumCount}</li>
        <li>Nombre d'écoute sur la plateforme : {totalListens}</li>
      </ul>
    </div>
  );
};

export default StatisticsTab;
