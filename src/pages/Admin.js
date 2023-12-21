// pages/Admin.js
import React, {Suspense} from 'react';
import TabBar from '../components/TabBar';
import SearchAppBar from '../components/AppBar';

const Admin = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <SearchAppBar />
      <TabBar />
    </Suspense>
  );
};

export default Admin;
