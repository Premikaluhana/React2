import React from 'react';
import './App.css';
import Nav from './component/nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
