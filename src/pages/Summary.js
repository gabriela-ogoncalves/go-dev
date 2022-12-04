import { useParams } from 'react-router-dom';
import Separator from '../components/Separator/Separator';
import SummaryTrilha from '../components/Summary/SummaryTrilha';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

import { yourProgress } from '../helpers/lists/yourProgress';
import { trilhas } from '../helpers/lists/trilhas';

const getYourTrilhaInfo = (trilhaName) => {
  const resp = yourProgress.filter(trilha => {
    if (trilha.nome.toLowerCase() === trilhaName) {
      return trilha;
    }
  });

  return resp[0];
};

const getTrilhaInfo = (trilhaName) => {
  const resp = trilhas.filter(trilha => {
    if (trilha.nome.toLowerCase() === trilhaName) {
      return trilha;
    }
  });

  return resp[0];
};


const Summary = () => {
  const param = useParams().trilha;
  const trilhaInfo = getYourTrilhaInfo(param) || getTrilhaInfo(param);

  return(
    <section data-testid='summary'>
      <SummaryTrilha info={trilhaInfo} />
      <Separator />
      <TrilhasSuggest />
    </section>
  );
};

export default Summary;