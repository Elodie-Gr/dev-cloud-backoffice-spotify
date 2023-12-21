//Item.js
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Item = ({name, albums, songs}) => {
  return (
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
        <Box sx={{ml: 1.5, minWidth: 0}}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
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
  );
};
