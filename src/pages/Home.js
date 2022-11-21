import Banner from '../components/Banner/Banner';
import TrilhasGrid from '../components/Grid/Grid';

const Home = () => {
  return (
    <div data-testid='home'>
      {/* <h1>HOME</h1> */}
      <Banner />
      <TrilhasGrid />
      <h1>HOME</h1>
      <h1>HOME</h1>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;