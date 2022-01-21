import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';


function App() {
  return (
    <div className="App">
      <h2>Login Page</h2>
      <Login />
      <br />
      <Logout />
    </div>
  );
}

export default App;
