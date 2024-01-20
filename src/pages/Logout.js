// pages/Logout.js
import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import {defaultTheme} from '../config/theme';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    const logoutDelay = setTimeout(() => {
      navigate('/login');
    }, 1500);

    return () => clearTimeout(logoutDelay);
  }, [navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}} src="./icon.png" />
          <Typography component="h1" variant="h5">
            Signing out
          </Typography>
          <Box sx={{mt: 1}}>
            <Typography variant="p">Redirecting to login page...</Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Logout;
