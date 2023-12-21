import React, {useEffect, useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {DraggableItemsList} from '../DraggableItemsList ';
import {fetchAlbums} from '../../services/api/albumApi';

const AlbumsTab = () => {
  const [albums, setAlbums] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handleDragEnd = result => {
    if (!result.destination) {
      return; // L'élément n'a pas été déplacé vers une nouvelle position
    }

    const newAlbums = Array.from(albums);
    const [movedAlbum] = newAlbums.splice(result.source.index, 1);
    newAlbums.splice(result.destination.index, 0, movedAlbum);

    setAlbums(newAlbums);
  };

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const albumsData = await fetchAlbums();
        setAlbums(albumsData);
        console.log(albumsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <DraggableItemsList
          items={albums}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
        />
      </DragDropContext>
    </div>
  );
};

export default AlbumsTab;
