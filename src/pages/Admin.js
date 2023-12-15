// pages/Admin.js
import React, {Suspense} from 'react';
import TabBar from '../components/TabBar';
import PrimarySearchAppBar from '../components/Search';

const Admin = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PrimarySearchAppBar />
      <TabBar />
    </Suspense>
  );
};

export default Admin;
