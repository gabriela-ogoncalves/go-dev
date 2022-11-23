import Banner from '../components/Banner/Banner';
import TrilhasGrid from '../components/Grid/Grid';
import Informative from '../components/Informative/Informative';

const Home = () => {
  return (
    <div data-testid='home'>
      {/* <h1>HOME</h1> */}
      <Banner />
      <TrilhasGrid />
      <Informative />
    </div>
  );
};

export default Home;