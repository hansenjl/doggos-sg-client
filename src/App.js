import React from 'react';
import './App.css';
import DogContainer from './containers/DogContainer'
import DogForm from './containers/DogForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> All your Favorite Dogs!</p>
      </header>
      <DogForm />
      <hr />
      <DogContainer />
    </div>
  );
}

export default App;
