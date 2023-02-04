import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthService from './services/auth';
import Context from './Context';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Trilhas from './pages/Trilhas';
import About from './pages/About';
import Certificados from './pages/Certificados';
import Summary from './pages/Summary';
import Cadastro from './pages/Cadastro';
import Aula from './pages/Aula';
import Exercicio from './pages/Exercicio';
import Profile from './pages/Profile';

import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  const [user, setUser] = useState(AuthService.getCurrentUser());

  return (
    <div className='go-dev'>
      <Context.Provider value={[user, setUser]}>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/trilhas' element={<Trilhas />} />
            <Route path='/about' element={<About />} />
            <Route path='/certificados' element={<Certificados />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='trilhas/resumo/:trilha' element={<Summary />} />
            <Route path='trilhas/:trilha/aulas/:aula' element={<Aula />} />
            <Route path='trilhas/:trilha/exercicios/:exercicio' element={<Exercicio />} />
          </Routes>
        </div>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
