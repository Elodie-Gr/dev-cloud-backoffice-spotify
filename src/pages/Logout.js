// pages/Logout.js
import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    const logoutDelay = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(logoutDelay);
  }, [navigate]);

  return (
    <div>
      <Typography variant="h4">You were successfully logged out</Typography>
      <Typography variant="body1">Redirecting to login page...</Typography>
    </div>
  );
};

export default Logout;
