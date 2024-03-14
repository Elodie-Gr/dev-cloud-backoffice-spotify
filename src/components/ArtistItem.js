//ArtistItem.js
import React, {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteModal from './DeleteModal';
import {deleteArtist, editArtist} from '../services/api/artistApi';
import EditArtistModal from './EditArtistModal';

export const Item = ({name, albums, songs, _id, onDelete, onEdit}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
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

  const handleEditArtist = async formData => {
    console.log('Editing Artist  with data:', formData);
    try {
      await editArtist(_id, formData);
      console.log('Artist edited successfully!');
      onEdit();
      handleCloseEditModal();
    } catch (error) {
      console.error('Error editing artist:', error);
    }
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <React.Fragment>
            <IconButton
              edge="end"
              aria-label="create"
              style={{margin: 2}}
              onClick={handleOpenEditModal}>
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
            <Typography color="#1ED760">{name}</Typography>
            <List>
              {albums.map(album => (
                <ListItem sx={{color: 'white'}} key={album._id}>
                  {album.title}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </ListItem>
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
      <EditArtistModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        onEdit={handleEditArtist}
        initialData={{name}}
      />
    </>
  );
};
