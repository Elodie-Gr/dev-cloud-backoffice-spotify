// MusicsTab.js
import React, {useState, useEffect} from 'react';
import {ItemsList} from '../SongsList';
import Dropzone from '../Dropzone';
import {importFile} from '../../services/api/importApi';
import {fetchSongs} from '../../services/api/songApi';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MusicsTab = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [openDropzoneModal, setOpenDropzoneModal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
        console.log(songsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, [uploadSuccess]);

  const handleDrop = async acceptedFiles => {
    try {
      console.log('Fichiers acceptés :', acceptedFiles);
      const file = acceptedFiles[0];
      const response = await importFile(file);
      setOpenDropzoneModal(false);
      setUploadSuccess(true);
      console.log(response); // ADD AN ALERT
    } catch (error) {
      setOpenDropzoneModal(false);
      setUploadError(true);
      console.error('Error importing file:', error);
    }
  };

  const handleOpenDropzoneModal = () => {
    setOpenDropzoneModal(true);
  };

  const handleCloseDropzoneModal = () => {
    setOpenDropzoneModal(false);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUploadSuccess(false);
    setUploadError(false);
    setDeleted(false);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleDelete = async () => {
    try {
      const updatedSongs = await fetchSongs();
      setSongs(updatedSongs);
      setDeleted(true);
    } catch (error) {
      console.error('Error fetching updated songs:', error);
    }
  };

  return (
    <div>
      <h2>Musiques</h2>
      <div>
        <Button onClick={handleOpenDropzoneModal}>IMPORT</Button>
        <Modal
          open={openDropzoneModal}
          onClose={handleCloseDropzoneModal}
          aria-labelledby="dropzone-modal-title"
          aria-describedby="dropzone-modal-description">
          <Box sx={style}>
            <Dropzone onDrop={handleDrop} />
          </Box>
        </Modal>
      </div>

      <ItemsList
        items={songs}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onDelete={handleDelete}
      />

      <Snackbar
        open={deleted}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{width: '100%'}}>
          Song deleted successfully.
        </Alert>
      </Snackbar>
      <Snackbar
        open={uploadSuccess}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{width: '100%'}}>
          File uploaded successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={uploadError}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error" sx={{width: '100%'}}>
          Error uploading file.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MusicsTab;
