import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import CadastroPostagem from './components/postagens/cadastropostagem/CadastroPost';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/logar'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/postagem'>
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPostagem />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPostagem />
          </Route>
          <Route exact path='/formularioTemas/:id'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTemas/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTemas/:id'>
            <DeletarTema />
          </Route>


        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;