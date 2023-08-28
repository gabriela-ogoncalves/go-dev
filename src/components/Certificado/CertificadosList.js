import React, { useEffect, useState } from 'react';

import SummaryService from '../../services/Summary';

const CertificadosList = () => {
  const [list, setList] = useState();

  useEffect(()=> {
    const getList = async () => {
      const response = await SummaryService.getCertificadosList();
      if (!ignore) setList(response);
    };

    let ignore = false;
    getList();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section data-testid='certificados-list' id='certificados-list'>
      <div className='header'>Certificados</div>
      {
        list && list.length > 0 ? (
          <div className='list'>
          {
            list && list.map((item, index) => {
              return (
                <a key={index} className='item' href={`/certificado/${item.id}`}>
                  <span>{item.name}</span>
                </a>
              );
            })
          }
          </div>
        ) : (
          <div className='message'>
            <span>Ei! Você ainda não completou uma trilha...</span>
            <a href={'/trilhas'}>
              <span>Vou completar agora mesmo!</span>
            </a>

          </div>
        )
      }
    </section>
  );
};

export default CertificadosList;