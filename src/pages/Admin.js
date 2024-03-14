// pages/Admin.js
import React, {Suspense} from 'react';
import AdminTabs from '../components/AdminTabs';
import SpotifyAppBar from '../components/AppBar';
import {ThemeProvider} from '@mui/material/styles';
import {defaultTheme} from '../config/theme';

const Admin = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Suspense fallback={<div>Chargement...</div>}>
        <SpotifyAppBar />
        <AdminTabs />
      </Suspense>
    </ThemeProvider>
  );
};

export default Admin;
