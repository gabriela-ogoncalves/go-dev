import BoxInfo from './BoxInfo';
import TrilhaInfo from './TrilhaInfo';

const SummaryTrilha = (props) => {
  const {info} = props;

  return(
    <section id='summary-trilha'>
      <TrilhaInfo info={info} />
      {info.topicos?.map(topico => {
        return(
          <fieldset key={topico.id}>
            <legend>{topico.nome}</legend>
            <p>{topico.desc}</p>
            <BoxInfo type='aulas' info={topico} />
            <BoxInfo type='exercicios' info={topico} />
          </fieldset>
        );
      })}

    </section>
  );
};

export default SummaryTrilha;