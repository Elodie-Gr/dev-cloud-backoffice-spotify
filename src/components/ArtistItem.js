//Item.js
import React, {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteModal from './DeleteModal';
import {deleteArtist} from '../services/api/artistApi';

export const Item = ({name, albums, songs, _id, onDelete}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteArtist(_id);

      console.log('Artist deleted successfully!');
      onDelete();
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting artist:', error);
    }
  };
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <React.Fragment>
            <IconButton edge="end" aria-label="create" style={{margin: 2}}>
              <CreateIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={handleOpenDeleteModal}>
              <DeleteIcon />
            </IconButton>
          </React.Fragment>
        }>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{ml: 1.5, minWidth: 0}}>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}>
              {name}
            </Typography>
            <Typography>
              <b>Albums:</b>
            </Typography>
            <ul>
              {albums.map(album => (
                <li key={album._id}>{album.title}</li>
              ))}
            </ul>
          </Box>
        </Box>
      </ListItem>
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};
