// EditAlbumModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditAlbumForm from './EditAlbumForm';

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

const EditAlbumModal = ({open, onClose, onEdit, initialData}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-album-modal"
      aria-describedby="edit-album-description">
      <Box sx={style}>
        <EditAlbumForm album={initialData} onClose={onClose} onEdit={onEdit} />
        <Button onClick={onClose} color="primary" variant="contained">
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default EditAlbumModal;
