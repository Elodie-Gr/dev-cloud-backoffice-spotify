import React, {useEffect, useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {DraggableItemsList} from '../DraggableAlbumList ';
import {fetchAlbums} from '../../services/api/albumApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlbumsTab = () => {
  const [albums, setAlbums] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [deleted, setDeleted] = useState(false);

  const handleDragEnd = result => {
    if (!result.destination) {
      return; // L'élément n'a pas été déplacé vers une nouvelle position
    }

    const newAlbums = Array.from(albums);
    const [movedAlbum] = newAlbums.splice(result.source.index, 1);
    newAlbums.splice(result.destination.index, 0, movedAlbum);

    setAlbums(newAlbums);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDeleted(false);
  };

  const handleDelete = async () => {
    try {
      const updatedAlbums = await fetchAlbums();
      setAlbums(updatedAlbums);
      setDeleted(true);
    } catch (error) {
      console.error('Error fetching updated songs:', error);
    }
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
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onDelete={handleDelete}
        />
      </DragDropContext>
      <Snackbar
        open={deleted}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{width: '100%'}}>
          Album deleted successfully.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlbumsTab;
