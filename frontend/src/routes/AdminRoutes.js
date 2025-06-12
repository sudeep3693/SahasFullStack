// AdminRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../Authentication/PrivateRoute';
import Admin from '../pages/Admin';
import Body from '../AdminComponents/Body';
import ContactDetails from '../AdminComponents/pages/ContactDetails';
import InstitutionalDetail from '../AdminComponents/pages/InstitutionalDetail';
import Notice from '../AdminComponents/pages/Notice';
import HandleImages from '../AdminComponents/pages/HandleImages';

const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for doesn't exist.</p>
  </div>
);



const AdminRoutes = (isAuthenticated) => [
  <Route
    key="protected-admin"
    element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
  >
    <Route path="/admin/*" element={<Admin />}>
      <Route index element={<Body />} />
      <Route path="contactDetails" element={<ContactDetails />} />
      <Route path="notice" element = {<HandleImages getLink={'http://localhost:3001/uploads/notice'} postLink={'http://localhost:3001/notice'} selectionHeader = {"Upload Notices"} displayHeader = {"Display Notices"} usedIn={'notice'}/>} />
      <Route path = "institutionalDetails" element = {<InstitutionalDetail/>}/>
      <Route path = "carouselImage" element = {<HandleImages getLink={'http://localhost:3001/uploads/carousel'} postLink={'http://localhost:3001/images/carousel'} selectionHeader = {"Upload Carousel Images"} displayHeader = {"Display Carousel Images"} usedIn={'carousel'}/>}/>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
];

export default AdminRoutes;
