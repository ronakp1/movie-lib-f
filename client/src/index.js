import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
//import NavBar from './components/NavBar';
import AuthProvider from './components/services/AuthContext';

ReactDOM.render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);