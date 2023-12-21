// DeleteConfirmationModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

const DeleteModal = ({open, onClose, onConfirmDelete}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-description">
      <Box sx={style}>
        <p>Do you really want to delete this song?</p>
        <Button onClick={onConfirmDelete} color="error" variant="contained">
          Delete
        </Button>
        <Button onClick={onClose} color="primary" variant="contained">
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
