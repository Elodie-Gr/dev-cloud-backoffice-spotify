import * as React from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';

import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';

const isAuthenticated = () => {
  // Check if the 'authToken' cookie exists
  const authToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('authToken='));
  return !!authToken;
};

const ProtectedRoute = ({element}) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/',
    element: <ProtectedRoute element={<Admin />} />,
  },
]);
