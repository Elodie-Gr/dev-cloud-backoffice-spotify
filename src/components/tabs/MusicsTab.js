// MusicsTab.js
import React, {useState} from 'react';
import {ItemsList} from '../ItemsList';
import Dropzone from '../Dropzone';
import {generateMusic} from '../../utils/generateSong';
import {importFile} from '../../services/api/importApi';

// Générer 1000 musiques
const numberOfMusics = 5000;
const itemsData = Array.from({length: numberOfMusics}, (_, index) =>
  generateMusic(index),
);

const MusicsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDrop = async acceptedFiles => {
    try {
      // Logique de gestion des fichiers ici
      console.log('Fichiers acceptés :', acceptedFiles);
      const file = acceptedFiles[0];
      const response = await importFile(file);
      console.log(response); //ADD AN ALERT
    } catch (error) {
      console.error('Error importing file:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      {/* Contenu pour l'onglet Musiques */}
      <h2>Musiques</h2>
      <ItemsList
        items={itemsData}
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
