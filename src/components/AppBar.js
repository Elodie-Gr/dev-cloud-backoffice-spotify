import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function SearchAppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
              <Avatar sx={{m: 1, bgcolor: 'secondary.main'}} src="./icon.png" />
            </Box>

            <Box sx={{display: {xs: 'none', md: 'block'}}}>
              <Typography variant="h6" noWrap>
                SPOTIFY BACKOFFICE
              </Typography>
            </Box>
          </Box>

          <Button color="inherit" onClick={handleLogout}>
            SIGN OUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
