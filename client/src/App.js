import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Teri maa ki ch**
        </p>
        <a href="/auth/google">
        Sign up with Google
        </a>
      </header>
    </div>
  );
}

export default App;
