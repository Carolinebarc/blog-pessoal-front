import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/static/navbar/Navbar';
import { Footer } from './componentes/static/footer/Footer';
import CadastroUsuario from './componentes/paginas/cadUsuario/CadastroUsuario';
import Home from './componentes/paginas/home/Home';
import Login from './componentes/paginas/login/Login';
import './App.css';
import ListaTema from './componentes/temas/listaTema/ListaTema'; 
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>
      <Footer/>

    </Router>
    </Provider>
  );
}

export default App;