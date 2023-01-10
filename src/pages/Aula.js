import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BoxInfo from '../components/Summary/BoxInfo';
import TrilhaHeader from '../components/Summary/TrilhaHeader';
import AulaService from '../services/Aula';
// import { yourProgress } from '../helpers/lists/yourProgress';

// const getTrilhaInfo = (trilhaName) => {
//   const resp = yourProgress.filter(trilha => {
//     if (trilha.nome.toLowerCase() === trilhaName) {
//       return trilha;
//     }
//   });

//   return resp[0];
// };

// const getAulaInfo = (aulas, aulaNumber) => {
//   const resp = aulas.filter(aula => {
//     if (aula.index === parseInt(aulaNumber)) {
//       return aula;
//     }
//   });

//   return resp[0];

// };

const Aula = () => {
  const param = useParams();
  const [aula, setAula] = useState({});
  // console.log('param', param);

  useEffect(() => {
    const getAula = async () => {
      const response = await AulaService.getAulaById(param);
      if (!ignore) setAula(response);
    };

    let ignore = false;
    getAula();
    return () => {
      ignore = true;
    };
  }, [param]);

  // const currentTrilha = getTrilhaInfo(param.trilha);
  // console.log('currentTrilha', currentTrilha);

  // const currentAula = getAulaInfo(currentTrilha.aulas, param.aula);
  // const {index, title} = currentAula;

  return (
    <>
      <TrilhaHeader name={currentTrilha.nome} logo={currentTrilha.logo} />
      <BoxInfo type='aulas' info={currentTrilha} currentItem={currentAula} />
      <h1>Aula {index} - {aula.title}</h1>
      <p>{aula.desc}</p>
    </>
  );
};

export default Aula;