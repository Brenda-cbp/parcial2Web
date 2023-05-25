import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from './routes/routes';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <BrowserRouter>
      <CreateRoutes />
    </BrowserRouter>
  );
}

export default App;
