import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lesson from '../components/Lesson/Lesson';
// import BoxInfo from '../components/Summary/BoxInfo';
import TrilhaHeader from '../components/Summary/TrilhaHeader';
import AulaService from '../services/Aula';
import AuthService from '../services/auth.js';
import SummaryService from '../services/Summary';

const Aula = () => {
  const param = useParams();
  const [aula, setAula] = useState({});
  const [topico, setTopico] = useState({});
  const [summaryTrilha, setSummaryTrilha] = useState({});
  const [completed, setCompleted] = useState(undefined);

  let invalidStatus = AuthService.getCurrentUser().username ? false : true;

  useEffect(() => {
    const getAula = async () => {
      const aula = await AulaService.getAulaById(param.aula);
      const topico = aula && await AulaService.getTopicoById(aula.topic_id, param.trilha);

      if (!ignore) {
        setAula(aula);
        setTopico(topico);
        setCompleted(aula.status);
      }
    };

    let ignore = false;
    getAula();
    return () => {
      ignore = true;
    };
  }, [param]);

  useEffect(() => {
    if (!AuthService.getCurrentUser().username || !aula || completed == null)
      return;
    const setStatus = async () => {
      await AulaService.sendAulaStatus(aula.id, completed);
    };

    setStatus();
  }, [completed]);

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

  // const handleChange = () => {
  //   invalidStatus = true;
  //   setCompleted(!completed);
  //   AulaService.sendAulaStatus(aula.id, !completed);
  //   invalidStatus = false;
  // };

  console.log('topicos em Aula: ', topics);
  console.log('topico: ', topico);
  console.log('invalidStatus: ', invalidStatus);


  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <Lesson topics={topics} currentItem={aula} trilhaId={param.id} />
      {/* <BoxInfo type="aulas" info={topico} currentItem={aula} />
      <h1>Aula {aula.title}</h1>
      <p>{aula.desc}</p>
      <input
        type="checkbox"
        name="completed"
        defaultChecked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        disabled={invalidStatus}
      /> */}
    </>
  );
};

export default Aula;
