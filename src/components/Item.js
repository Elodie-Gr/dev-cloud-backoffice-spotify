//Item.js
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

// Update the CoverImage component
const CoverImage = styled('img')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  backgroundSize: 'cover',
});

export const Item = ({artistName, title, albumTitle, albumCover, album}) => (
  <ListItem
    alignItems="flex-start"
    secondaryAction={
      <React.Fragment>
        <IconButton edge="end" aria-label="create" style={{margin: 2}}>
          <CreateIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </React.Fragment>
    }>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <CoverImage src={`data:image/png;base64, ${albumCover}`} />
      <Box sx={{ml: 1.5, minWidth: 0}}>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {artistName}
        </Typography>
        <Typography noWrap>
          <b>{title}</b>
        </Typography>
        <Typography noWrap letterSpacing={-0.25}>
          {albumTitle}
        </Typography>
      </Box>
    </Box>
  </ListItem>
);
