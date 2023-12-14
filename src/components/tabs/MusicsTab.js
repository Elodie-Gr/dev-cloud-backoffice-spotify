// MusicsTab.js
import React /* {lazy} */, {useState} from 'react';
import {ItemsList} from '../ItemsList';
import Dropzone from '../Dropzone';
import {generateMusic} from '../../utils/generateSong';

// Générer 1000 musiques
const numberOfMusics = 5000;
const itemsData = Array.from({length: numberOfMusics}, (_, index) =>
  generateMusic(index),
);

/* const loadItemsDataAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const numberOfMusics = 1000;
      const itemsData = Array.from({length: numberOfMusics}, (_, index) =>
        generateMusic(index),
      );
      resolve(itemsData);
    }, 1000); // ajustez le délai selon vos besoins
  });
}; */

/* const LazyLoadedMusicsTab = lazy(() =>
  loadItemsDataAsync().then(data => ({
    default: () => <MusicsTab itemsData={data} />,
  })),
); */

const MusicsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDrop = acceptedFiles => {
    // Logique de gestion des fichiers ici
    console.log('Fichiers acceptés :', acceptedFiles);
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
      <div className="App">
        <h1>Glisser et déposer pour télécharger</h1>
        <Dropzone onDrop={handleDrop} />
      </div>
    </div>
  );
};

export default MusicsTab;
