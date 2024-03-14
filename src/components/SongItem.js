//SongItem.js
import React, {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteModal from './DeleteModal';
import {deleteSong, editSong} from '../services/api/songApi';
import EditSongModal from './EditSongModal';

const COVER_IMAGE_URL = process.env.REACT_APP_COVER_IMAGE_URL;

export const Item = ({
  artist,
  title,
  albumCover,
  album,
  _id,
  onDelete,
  onEdit,
}) => {
  const coverUrl = `${COVER_IMAGE_URL}/${albumCover}`;

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
      await deleteSong(_id);

      console.log('Song deleted successfully!');
      onDelete();
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  };

  const handleEditSong = async formData => {
    console.log('Editing Song with data:', formData);
    try {
      await editSong(_id, formData);
      console.log('Song edited successfully!');
      onEdit();
      handleCloseEditModal();
    } catch (error) {
      console.error('Error editing song:', error);
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
        <img
          src={coverUrl}
          alt={`${artist.name} - ${title}`}
          style={{width: 64, height: 64, marginRight: 16}}
        />
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{ml: 1.5, minWidth: 0}}>
            <Typography variant="caption" color="white" fontWeight={500}>
              {artist.name}
            </Typography>
            <Typography color="#1ED760" noWrap>
              <b>{title}</b>
            </Typography>
            <Typography
              variant="caption"
              color="white"
              noWrap
              letterSpacing={-0.25}>
              {album.title}
            </Typography>
          </Box>
        </Box>
      </ListItem>
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
      <EditSongModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        onEdit={handleEditSong}
        initialData={{title}}
      />
    </>
  );
};
