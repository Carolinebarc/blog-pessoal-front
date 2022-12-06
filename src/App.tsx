import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/static/navbar/Navbar';
import { Footer } from './componentes/static/footer/Footer';
import { Home } from './componentes/paginas/home/Home';
import './App.css';
import Login from './componentes/paginas/login/Login';
import CadastroUsuario from './componentes/paginas/cadUsuario/CadastroUsuario';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/CadastroUsuario" element={<CadastroUsuario />} />

        </Routes>
        <Footer/>
      </Router>
    </Provider>

  );
}

export default App;