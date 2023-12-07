// Utilisation dans votre composant principal
import React from 'react';
import TabBar from './components/TabBar';
import StyledButton from './components/Button';
import PrimarySearchAppBar from './components/Search';

const MyComponent = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <TabBar />
      <StyledButton>Ecouter sur Spotify</StyledButton>
    </div>
  );
};

export default MyComponent;
