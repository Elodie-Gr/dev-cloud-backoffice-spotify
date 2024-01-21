// EditArtistModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditArtistForm from './EditArtistForm';

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

const EditArtistModal = ({open, onClose, onEdit, initialData}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-album-modal"
      aria-describedby="edit-album-description">
      <Box sx={style}>
        <EditArtistForm
          artist={initialData}
          onClose={onClose}
          onEdit={onEdit}
        />
      </Box>
    </Modal>
  );
};

export default EditArtistModal;
