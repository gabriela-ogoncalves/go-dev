import Separator from '../components/Separator/Separator';
import TrilhaProgress from '../components/TrilhasProgress/TrilhasProgress';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

const Trilhas = () => {
  return (
    <section data-testid='trilhas'>
      <TrilhaProgress />
      <Separator />
      <TrilhasSuggest />
    </section>
  );
};

export default Trilhas;