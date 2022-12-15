import { useParams } from 'react-router-dom';
import BoxInfo from '../components/Summary/BoxInfo';
import TrilhaHeader from '../components/Summary/TrilhaHeader';
import { yourProgress } from '../helpers/lists/yourProgress';

const getTrilhaInfo = (trilhaName) => {
  const resp = yourProgress.filter(trilha => {
    if (trilha.nome.toLowerCase() === trilhaName) {
      return trilha;
    }
  });

  return resp[0];
};

const getExercicioInfo = (exercicios, exercicioNumber) => {
  const resp = exercicios.filter(item => {
    if (item.index === parseInt(exercicioNumber)) {
      return item;
    }
  });

  return resp[0];

};

const Exercicio = () => {
  const param = useParams();
  const currentTrilha = getTrilhaInfo(param.trilha);
  const currentExercicio = getExercicioInfo(currentTrilha.exercicios, param.exercicio);
  
  const {index, title} = currentExercicio;

  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <BoxInfo type='exercicios' info={currentTrilha} currentItem={currentExercicio} />
      <h1>Exercício {index} - {title}</h1>
    </>
  );
};

export default Exercicio;