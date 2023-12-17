// pages/Login.js
import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {login} from '../services/api/authApi';
import {useNavigate} from 'react-router-dom';

const defaultTheme = createTheme();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    try {
      const credentials = {email, password};
      const response = await login(credentials);

      if (response.token) {
        navigate('/');
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setLoginError('An error occurred during login', error.message);
    }
  };

  useEffect(() => {
    const isAuthTokenPresent = () => {
      const authTokenCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('authToken='));
      return authTokenCookie !== undefined;
    };
    const tokenPresent = isAuthTokenPresent();
    if (tokenPresent) {
      navigate('/');
    }
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setEmailError('');
                setLoginError('');
              }}
              error={Boolean(emailError)}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setPasswordError('');
                setLoginError(''); // Clear the login error when the user starts typing
              }}
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
            {loginError && (
              <Typography variant="body2" color="error">
                {loginError}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
