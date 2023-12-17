import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {DraggableItemsList} from '../DraggableItemsList ';

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

const AlbumsTab = () => {
  const [albums, setAlbums] = React.useState(itemsData);
  const handleDragEnd = result => {
    if (!result.destination) {
      return; // L'élément n'a pas été déplacé vers une nouvelle position
    }

    const newAlbums = Array.from(albums);
    const [movedAlbum] = newAlbums.splice(result.source.index, 1);
    newAlbums.splice(result.destination.index, 0, movedAlbum);

    setAlbums(newAlbums);
  };

  return (
    <div>
      <h2>Albums</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <DraggableItemsList items={albums} />
      </DragDropContext>
    </div>
  );
};

export default AlbumsTab;
