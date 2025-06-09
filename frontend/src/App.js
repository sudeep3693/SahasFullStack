import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import AuthRoutes from './routes/AuthRoutes';


function App() {
  return (
    <Router>
       <UserRoutes/>
      <Routes>
        {AuthRoutes}
        {AdminRoutes}
        
      </Routes>
    </Router>
  );
}

export default App;
