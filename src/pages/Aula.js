import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lesson from '../components/Lesson/Lesson';
import TrilhaHeader from '../components/Summary/TrilhaHeader';
import AulaService from '../services/Aula';
import SummaryService from '../services/Summary';

const Aula = () => {
  const param = useParams();
  const [aula, setAula] = useState({});
  /* eslint-disable-next-line */
  const [topico, setTopico] = useState({});
  const [summaryTrilha, setSummaryTrilha] = useState({});

  useEffect(() => {
    const getAula = async () => {
      const aula = await AulaService.getAulaById(param.aula);
      const topico = aula && await AulaService.getTopicoById(aula.topic_id, param.trilha);

      if (!ignore) {
        setAula(aula);
        setTopico(topico);
      }
    };

    let ignore = false;
    getAula();
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


  const currentTrilha = {
    nome: param.trilha,
    logo: require(`../assets/logo/trilhas/${param.trilha.toLowerCase()}-logo.png`),
  };

  const topics = summaryTrilha?.topicos?.sort((a, b) => a.id - b.id);

  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <Lesson topics={topics} currentItem={aula} trilhaId={param.id} />
    </>
  );
};

export default Aula;
