import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/Login';

const AuthRoutes = [
  <Route key="login" path="/login" element={<LoginPage />} />,
];

export default AuthRoutes;
