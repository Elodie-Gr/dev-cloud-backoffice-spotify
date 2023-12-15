// pages/Logout.js
import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    const logoutDelay = setTimeout(() => {
      history.push('/login');
    }, 2000);

    return () => clearTimeout(logoutDelay);
  }, [history]);

  return (
    <div>
      <Typography variant="h4">You were successfully logged out</Typography>
      <Typography variant="body1">Redirecting to login page...</Typography>
    </div>
  );
};

export default Logout;
