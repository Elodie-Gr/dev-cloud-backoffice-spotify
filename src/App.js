/* // Utilisation dans votre composant principal
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
 */

// App.js
import React, {useState} from 'react';
import Login from './pages/Login';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome to the Backoffice!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
