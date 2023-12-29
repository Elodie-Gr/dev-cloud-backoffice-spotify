import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import DeleteModal from './DeleteModal';
import {deleteAlbum} from '../services/api/albumApi';

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const COVER_IMAGE_URL = process.env.REACT_APP_COVER_IMAGE_URL;

export const DraggableItem = ({
  artist,
  songs,
  title,
  releaseDate,
  albumCover,
  index,
  _id,
  onDelete,
}) => {
  const coverUrl = `${COVER_IMAGE_URL}/${albumCover}`;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAlbum(_id);

      console.log('Album deleted successfully!');
      onDelete();
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };
  return (
    <>
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            alignItems="flex-start"
            style={{
              ...provided.draggableProps.style, // Use the provided styles
              backgroundColor: snapshot.isDragging ? 'lightgreen' : 'pink', // Adjust background color based on dragging state
              padding: '10px',
            }}
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
              <CoverImage>
                <img alt="Song Title" src={coverUrl} />
              </CoverImage>
              <Box sx={{ml: 1.5, minWidth: 0}}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={500}>
                  {artist.name}
                </Typography>
                <Typography noWrap>
                  <b>{songs.title}</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                  {title}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        )}
      </Draggable>
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};
