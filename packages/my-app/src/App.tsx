import React from 'react';
import ExternalComponent from "react-components-local/dist/ExternalComponent";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This <b>ExternalComponent</b>.
        </p>
        <ExternalComponent />
      </header>
    </div>
  );
}

export default App;
