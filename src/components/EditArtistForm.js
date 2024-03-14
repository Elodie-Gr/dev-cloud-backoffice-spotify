//EditArtistForm.js
import React, {useState} from 'react';
import {Box, Button, Input, FormControl} from '@mui/material';

const EditArtistForm = ({artist, onClose, onEdit}) => {
  const [newName, setNewName] = useState(artist.name);

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onEdit({name: newName});
  };

  return (
    <Box
      component="form"
      sx={{display: 'flex', flexWrap: 'wrap'}}
      onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <Input
          id="name"
          name="name"
          value={newName}
          onChange={handleNameChange}
          required
        />
      </FormControl>
      <br />

      <Button type="submit" variant="contained" color="primary">
        Edit Artist
      </Button>
      <Button onClick={onClose} color="primary" variant="contained">
        Cancel
      </Button>
    </Box>
  );
};

export default EditArtistForm;
