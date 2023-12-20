// MusicsTab.js
import React, {useState, useEffect} from 'react';
import {ItemsList} from '../ItemsList';
import Dropzone from '../Dropzone';
import {importFile} from '../../services/api/importApi';
import {fetchSongs} from '../../services/api/songApi';

const MusicsTab = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
      } catch (error) {
        // Handle error, show error message, etc.
      }
    };

    fetchData();
  }, []);

  const handleDrop = async acceptedFiles => {
    try {
      // Logique de gestion des fichiers ici
      console.log('Fichiers acceptés :', acceptedFiles);
      const file = acceptedFiles[0];
      const response = await importFile(file);
      console.log(response); // ADD AN ALERT
    } catch (error) {
      console.error('Error importing file:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Musiques</h2>
      <ItemsList
        items={songs}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <div>
        <h1>Glisser et déposer pour télécharger</h1>
        <Dropzone onDrop={handleDrop} />
      </div>
    </div>
  );
};

export default MusicsTab;
