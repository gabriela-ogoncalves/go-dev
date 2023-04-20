import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrilhaHeader from '../components/Summary/TrilhaHeader';
import Exercise from '../components/Exercise/Exercise';

import ExercicioService from '../services/Exercicio';
import SummaryService from '../services/Summary';

const Exercicio = ({ user }) => {
  const param = useParams();
  const [exercicio, setExercicio] = useState({});
  const [completed, setCompleted] = useState(undefined);
  const [summaryTrilha, setSummaryTrilha] = useState({});

  const invalidStatus = user ? false : true;

  useEffect(() => {  
    const getExercicio = async () => {
      const exercise = await ExercicioService.getExercicioById(param.exercicio);

      if (!ignore) {
        setExercicio(exercise);
        setCompleted(exercise.status);
      }
    };

    let ignore = false;
    getExercicio();
    return () => {
      ignore = true;
    };

  }, [param]);


  useEffect(() => {
    const getCurrentTrilha = async () => {
      const trilha = await SummaryService.getTrilhaById(parseInt(param.id));

      if (!ignore) {
        setSummaryTrilha(trilha);
      }
    };

    let ignore = false;
    getCurrentTrilha();
    return () => {
      ignore = true;
    };
  }, [param.id]);

  useEffect(() => {
    if (!user || !exercicio || completed == null)
      return;
    
    const setStatus = async () => {
      await ExercicioService.sendExercicioStatus(exercicio.id, completed);
    };

    setStatus();
  }, [completed]);

  return (
    <>
      <TrilhaHeader name={summaryTrilha.nome} logo={summaryTrilha.logo} />
      <Exercise
        user={user}
        item={exercicio}
        trilhaId={param.id}
        completed={completed}
        invalidStatus={invalidStatus}
      />
    </>
  );
};

export default Exercicio;