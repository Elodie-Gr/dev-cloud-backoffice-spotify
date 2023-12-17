// SpotifyButton.js
import React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor: '#1DB954',
  borderRadius: '20px',
  color: 'white',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '#1ED760',
  },
}));

export default StyledButton;
