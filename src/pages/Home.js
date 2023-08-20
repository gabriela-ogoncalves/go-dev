import React from 'react';

import Banner from '../components/Banner/Banner';
import TrilhasGrid from '../components/Grid/Grid';
import Informative from '../components/Informative/Informative';
import { getRow, setStyle } from '../helpers/utils';

const Home = ({ trilhas, user }) => {
  let isSmall;

  if (trilhas) {
    const type = trilhas.length <= 4 ? 'small' : 'big';
    isSmall = type === 'small';
  }

  return (
    <section data-testid="home">
      <Banner />
      {trilhas && (
        <TrilhasGrid
          title="Confira algumas das nossas trilhas"
          items={trilhas}
          row={getRow(isSmall)}
          style={setStyle(isSmall)}
        />
      )}
      <Informative user={user} />
    </section>
  );
};

export default Home;