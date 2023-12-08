// Utilisation dans votre composant principal
import React, {Suspense} from 'react';
import TabBar from './components/TabBar';
import PrimarySearchAppBar from './components/Search';

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PrimarySearchAppBar />
      <TabBar />
    </Suspense>
  );
};

export default MyComponent;
