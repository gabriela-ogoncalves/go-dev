import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import TrilhasGrid from '../components/Grid/Grid';
import Informative from '../components/Informative/Informative';
import HomeService from '../services/Home';

const Home = () => {
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
    <section data-testid='home'>
      <Banner />
      <TrilhasGrid title='Confira algumas das nossas trilhas' items={trilhas} />
      <Informative />
    </section>
  );
};

export default Home;