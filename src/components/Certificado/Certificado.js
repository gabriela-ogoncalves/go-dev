import React from 'react';
import logo from '../../assets/logo/go-dev-logo.png';
import signature from '../../assets/images/signature.png';

import './styles.scss';

const CertificadoItem = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} data-testid='certificado-item' id='certificado-item'>
       <div className='item'>
          <div className='container'>
              <div className='logo'><img src={logo} alt='logo do go dev' /></div>
              <p className='marquee'>Certificado de Conclusão</p>
              <p className='assignment'>Certificamos que o(a) aluno(a)</p>
              <p className='person'>Nome do aluno</p>
              <p className='reason'>
                concluiu o curso de <b>Nome do curso</b>, com a carga horária de XX horas, no dia <b>xx</b> de <b>xxxxxxx</b> de <b>20xx</b> pela aplicação Go Dev.
              </p>
              <div className='signature'>
                <img src={signature} alt='assinatura do go dev' />
              </div>
          </div>
        </div>
    </section>
  );
});

export default CertificadoItem;