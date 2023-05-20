import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Separator from '../components/Separator/Separator';
import SummaryTrilha from '../components/Summary/SummaryTrilha';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

import SummaryService from '../services/Summary';

const Summary = ({ user, trilhas }) => {
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
      <SummaryTrilha info={trilha} user={user} />
      { trilhas && (
        <>
          <Separator />
          <TrilhasSuggest items={trilhas} />
        </>
      )}
    </section>
  );
};

export default Summary;