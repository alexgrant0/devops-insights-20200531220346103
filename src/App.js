import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import AppMap from './components/AppMap';

import './App.css';

function App() {
  return (

    <div className="App">
      <AppHeader />
      <AppContainer />
      <AppMap />
    </div>
  );
}

export default App;
