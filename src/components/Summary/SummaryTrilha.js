import BoxInfo from './BoxInfo';
import TrilhaInfo from './TrilhaInfo';

const SummaryTrilha = (props) => {
  const {info} = props;

  return(
    <section id='summary-trilha'>
      <TrilhaInfo info={info} />
      <BoxInfo type='aulas' info={info} />
      <BoxInfo type='exercicios' info={info} />
    </section>
  );
};

export default SummaryTrilha;