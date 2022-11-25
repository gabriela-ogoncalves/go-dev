import Banner from '../components/Banner/Banner';
import TrilhasGrid from '../components/Grid/Grid';
import Informative from '../components/Informative/Informative';
import { trilhas } from '../helpers/lists/trilhas';

const Home = () => {
  return (
    <section data-testid='home'>
      <Banner />
      <TrilhasGrid title='Confira algumas das nossas trilhas' items={trilhas} />
      <Informative />
    </section>
  );
};

export default Home;