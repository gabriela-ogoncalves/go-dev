import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Trilhas from './pages/Trilhas';
import About from './pages/About';
import Certificados from './pages/Certificados';

import './App.scss';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trilhas' element={<Trilhas />} />
          <Route path='/about' element={<About />} />
          <Route path='/certificados' element={<Certificados />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
