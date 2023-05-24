import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Print from '../components/Print/Print';

import Separator from '../components/Separator/Separator';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';
import CertificadoItem from '../components/Certificado/Certificado';
import CertificadosList from '../components/Certificado/CertificadosList';

import SummaryService from '../services/Summary';

const Certificado = ({ user, trilhas }) => {
  const param = useParams().trilha;
  const [trilha, setTrilha] = useState({});

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  if (param) {
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

    return (
      <section data-testid='certificado'>
        <CertificadoItem ref={componentRef} trilha={trilha} user={user} />
        <Print onClick={handlePrint} text='Imprimir certificado' />
        { trilhas && (
          <>
            <Separator />
            <TrilhasSuggest items={trilhas} />
          </>
        )}
      </section>
    );
  }

  return (
    <section data-testid='certificados'>
      <CertificadosList trilha={trilha} user={user} />
      { trilhas && (
        <>
          <Separator />
          <TrilhasSuggest items={trilhas} />
        </>
      )}
    </section>
  );
};

export default Certificado;