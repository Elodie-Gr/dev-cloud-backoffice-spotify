//EditSongForm.js
import React, {useState} from 'react';
import {Box, Button, Input, FormControl} from '@mui/material';

const EditSongForm = ({song, onClose, onEdit}) => {
  const [newTitle, setNewTitle] = useState(song.title);

  const handleTitleChange = e => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onEdit({title: newTitle});
  };

  return (
    <Box
      component="form"
      sx={{display: 'flex', flexWrap: 'wrap'}}
      onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <Input
          id="title"
          title="title"
          value={newTitle}
          onChange={handleTitleChange}
          required
        />
      </FormControl>
      <br />

      <Button type="submit" variant="contained" color="primary">
        Edit Song
      </Button>
      <Button onClick={onClose} color="primary" variant="contained">
        Cancel
      </Button>
    </Box>
  );
};

export default EditSongForm;
