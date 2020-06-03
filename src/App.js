import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
      <embed type="text/html" src="Map.html" width="500" height="200"/>
    </div>
  );
}

export default App;
