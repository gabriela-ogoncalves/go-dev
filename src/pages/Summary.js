import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Separator from '../components/Separator/Separator';
import SummaryTrilha from '../components/Summary/SummaryTrilha';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

// import { yourProgress } from '../helpers/lists/yourProgress';
// import { trilhas } from '../helpers/lists/trilhas';
import SummaryService from '../services/Summary';

const Summary = () => {
  const param = useParams().trilha;
  const [trilha, setTrilha] = useState({});

  useEffect(() => {
    const getTrilha = async () => {
      const response = await SummaryService.getTrilhaById(param);
      if (!ignore) setTrilha(response);
    };

    let ignore = false;
    getTrilha();
    return () => {
      ignore = true;
    };
  }, [param]);

  return(
    <section data-testid='summary'>
      <SummaryTrilha info={trilha} />
      <Separator />
      <TrilhasSuggest />
    </section>
  );
};

export default Summary;