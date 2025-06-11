// AdminRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../Authentication/PrivateRoute';
import Admin from '../pages/Admin';
import Body from '../AdminComponents/Body';
import ContactDetails from '../AdminComponents/pages/ContactDetails';
import MemberDetails from '../AdminComponents/pages/MemberDetails';

const AdminRoutes = (isAuthenticated) => [
  <Route
    key="protected-admin"
    element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
  >
    <Route path="/admin" element={<Admin />}>
      <Route index element={<Body />} />
      <Route path="contactDetails" element={<ContactDetails />} />
      <Route path="memberDetails" element={<MemberDetails />} />
    </Route>
  </Route>
];

export default AdminRoutes;
