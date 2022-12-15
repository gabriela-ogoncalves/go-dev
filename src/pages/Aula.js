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

const getAulaInfo = (aulas, aulaNumber) => {
  const resp = aulas.filter(aula => {
    if (aula.index === parseInt(aulaNumber)) {
      return aula;
    }
  });

  return resp[0];

};

const Aula = () => {
  const param = useParams();
  console.log('param', param);
  const currentTrilha = getTrilhaInfo(param.trilha);
  console.log('currentTrilha', currentTrilha);

  const currentAula = getAulaInfo(currentTrilha.aulas, param.aula);
  const {index, title} = currentAula;

  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <BoxInfo type='aulas' info={currentTrilha} currentItem={currentAula} />
      <h1>Aula {index} - {title}</h1>
    </>
  );
};

export default Aula;