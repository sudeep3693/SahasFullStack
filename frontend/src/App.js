import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import AuthRoutes from './routes/AuthRoutes';
import { AuthContext } from './Authentication/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <UserRoutes />
      <Routes>
        {AuthRoutes(isAuthenticated)}
        {AdminRoutes(isAuthenticated)}
      </Routes>
    </Router>
  );
}

export default App;
