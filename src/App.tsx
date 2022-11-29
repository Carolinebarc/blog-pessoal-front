import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/static/navbar/navbar';
import { Home } from './componentes/paginas/Home/home';
import { Postagens } from './componentes/postagens/postagens';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/inicio' element={<Home />}/>
        <Route path='/postagens' element={<Postagens />}/>
        
      </Routes>
    </Router>
  )
}

export default App;