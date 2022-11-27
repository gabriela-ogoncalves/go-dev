import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Print from '../components/Print/Print';

import Separator from '../components/Separator/Separator';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';
import CertificadoItem from '../components/Certificado/Certificado';

const Certificado = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <section data-testid='certificado'>
      <CertificadoItem ref={componentRef} />
      <Print onClick={handlePrint} text='Imprimir certificado' />
      <Separator />
      <TrilhasSuggest />
    </section>
  );
};

export default Certificado;