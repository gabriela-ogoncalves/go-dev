import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthService from './services/auth';
import HomeService from './services/Home';
import Context from './Context';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

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

import './App.scss';

function App() {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const [trilhas, setTrilhas] = useState('');

  useEffect(() => {
    const getTrilhas = async () => {
      setTrilhas(null);
      const response = await HomeService.getTrilhas();
      if (!ignore) setTrilhas(response);
    };

    let ignore = false;
    getTrilhas();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className='go-dev'>
      <Context.Provider value={[user, setUser]}>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home trilhas={trilhas} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/trilhas' element={<Trilhas user={user} trilhas={trilhas} />} />
            <Route path='/about' element={<About />} />
            <Route path='/certificados' element={<Certificados />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='trilhas/resumo/:trilha' element={<Summary user={user} trilhas={trilhas} />} />
            <Route path='trilhas/:trilha/:id/aulas/:aula' element={<Aula />} />
            <Route path='trilhas/:trilha/:id/exercicios/:exercicio' element={<Exercicio user={user} />} />
          </Routes>
        </div>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
