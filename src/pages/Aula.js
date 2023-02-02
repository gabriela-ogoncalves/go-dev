import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BoxInfo from '../components/Summary/BoxInfo';
import TrilhaHeader from '../components/Summary/TrilhaHeader';
import AulaService from '../services/Aula';
import AuthService from '../services/auth.js';

const Aula = () => {
  const param = useParams();
  const [aula, setAula] = useState({});
  const [topico, setTopico] = useState({});
  const [completed, setCompleted] = useState(undefined);
  
  let invalidStatus = AuthService.getCurrentUser().username ? false : true;

  useEffect(() => {
    const getAula = async () => {
      const aula = await AulaService.getAulaById(param.aula);
      const topico = await AulaService.getTopicoById(param.aula, param.trilha);
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
    if (!AuthService.getCurrentUser().username || !aula || (completed == null)) return;
    const setStatus = async () => {
      await AulaService.sendAulaStatus(aula.id, completed);
    };

    setStatus();
  }, [completed]);

  const currentTrilha = {
    'nome': param.trilha,
    'logo': require(`../assets/logo/trilhas/${param.trilha.toLowerCase()}-logo.png`),
  };

  // const handleChange = () => {
  //   invalidStatus = true;
  //   setCompleted(!completed);
  //   AulaService.sendAulaStatus(aula.id, !completed);
  //   invalidStatus = false;
  // }; 

  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <BoxInfo type='aulas' info={topico} currentItem={aula} />
      <h1>Aula {aula.title}</h1>
      <p>{aula.desc}</p>
      <input type='checkbox' name='completed' defaultChecked={completed} onChange={(e) => setCompleted(e.target.checked)} disabled={invalidStatus}/> 
    </>
  );
};

export default Aula;